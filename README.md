# delivery-engineer-worktest

## Setup

1. Install node package manager.
2. Execute `npm run launch-app` on the command line.
3. Open a browser to http://localhost:3000/ to confirm that the application is running.

## Exercise 1: Failure Diagnostics

Open a new command line and execute `npm run failure-diagnostic-exercise`.

The test is designed to fail. If the failure represents a problem with the website, i.e. a bug that should be reported to the website administrator, put a description of the bug in the `bug_report.txt` file. If you discover a bug, you are done with this exercise. 

If the test fails because the test itself is not properly configured, edit the test code in `tests/failure-diagnostic-exercise-test.js` such that the test passes and can continue the workflow. Note: the point is not to change the workflow in any way, but to infer whatever action the test is trying to perform and fix whatever is preventing it from doing so.

When you rerun the test, if further points of failure are exposed, check if it's a bug, otherwise fix the test code. Repeat until you hit a bug or the test passes. 

There is a correct answer to this exercise. You should spend no more than 30 minutes on it.

## Exercise 2: Assertions

Open a new command line and execute `npm run assertions-exercise`. Watch the test run. It should pass.

Open `tests/assertions-exercise-test.js` in your preferred IDE. You'll notice that the test code has no assertions. Add assertions that would that make the test more robust, i.e. expectations that would fail if there were bugs or issues with the UX.

[Here](https://devexpress.github.io/testcafe/documentation/test-api/assertions/) is the documentation for assertions in TestCafe.

There is not a definite set of right answers to this exercise. The goal is for you to demonstrate the critical thinking skills of a QA engineer in identifying what should be tested. The assertions you write should expose bugs and cause the test to fail where a test with only `click()` and `typeText()` events would pass. 

You should spend no more than 1.5 hours on this exercise. 

## Submission

Create a branch with the following naming scheme: `<First_Initial>_<Last Name>_<Month>_<Day>`
For example: `a_smith_09_02`
Push to remote and raise a PR. This will signal to us that you have completed the exercise, and we will be in touch with next steps.
