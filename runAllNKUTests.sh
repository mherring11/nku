#!/bin/bash

# List of test files to run for the NKU project.
TEST_FILES=(
  "applyFormValidation.spec.js"
  "footerVerification.spec.js"
  "gettingStarted.spec.js"
  "programNavigation.spec.js"
  "programSection.spec.js"
  "requestFormValidation.spec.js"
  "resourcesSection.spec.js"
)

# Maximum number of retries for flaky tests. Adjust this value based on test stability.
MAX_RETRIES=3

# Initialize an array to store failed tests and set the default test result to "SUCCESS".
FAILED_TESTS=()
TEST_RESULT="SUCCESS"

# Function to check if a specific port is in use and terminate the process occupying it.
# Arguments:
#   $1: Port number to check and free if in use.
check_and_kill_port() {
  local port=$1
  # Check if the port is currently in use.
  if lsof -i:$port &> /dev/null; then
    echo "Port $port is in use. Attempting to free it."
    # Kill the process occupying the port.
    fuser -k $port/tcp
  fi
}

# Function to run each test file, capture results, and handle retries for flaky tests.
# Arguments:
#   $1: Test file name to run.
run_test_and_capture() {
  local test_file=$1
  local port=9323
  # Generate a random port number to avoid conflicts during concurrent executions.
  local unique_port=$((port + RANDOM % 1000))
  local retry_count=0

  # Retry loop to handle flaky tests. Retries up to MAX_RETRIES times.
  while [ $retry_count -lt $MAX_RETRIES ]; do
    echo "Running test: $test_file using port: $unique_port (Attempt: $((retry_count + 1)))"

    # Check if the unique port is in use and kill the process if necessary.
    check_and_kill_port $unique_port

    # Run the Playwright test in headed mode with the specified parameters.
    # The '|| true' ensures the script doesn't exit on failure and continues.
    if npx playwright test "tests/$test_file" --workers=1 --headed --reporter=html --output=results/${test_file}_${retry_count}.html --timeout=120000 --retries=0 || true; then
      echo "Test finished: $test_file"
    fi

    # Check if the last command (test execution) was successful.
    if [ $? -eq 0 ]; then
      echo "Test passed: $test_file"
      break
    else
      echo "Test failed: $test_file (Attempt: $((retry_count + 1)))"
      retry_count=$((retry_count + 1))
      # If maximum retries are reached, mark the test as failed.
      if [ $retry_count -ge $MAX_RETRIES ]; then
        FAILED_TESTS+=("$test_file")
        TEST_RESULT="FAILURE"
      fi
    fi
  done
}

# Main execution loop to run all test files sequentially.
echo "Starting tests for all files sequentially..."

# Iterate over all the test files defined in the TEST_FILES array and run each one.
for TEST_FILE in "${TEST_FILES[@]}"; do
  run_test_and_capture "$TEST_FILE" || true # Ensures the script continues even if this particular test fails.
done

echo "Completed tests for all files."

# Check if any tests failed and send an email notification accordingly.
if [ ${#FAILED_TESTS[@]} -ne 0 ]; then
  echo "Failed tests: ${FAILED_TESTS[@]}"
else
  echo "All tests passed successfully."
fi

# End of the script
echo "Script finished."
