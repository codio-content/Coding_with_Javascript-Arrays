#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'x10.js'
run_js_test '1 2 3 4 5 6 5 3' "[ 1, 2, 15, 4, 5, 30 ]"
run_js_test '1 2 3 4 5 6 2 7' "[ 1, 2, 3, 4, 5, 6 ]" 'Your code is not handling the case where there are less than N elements in the array.'
end_js_test

