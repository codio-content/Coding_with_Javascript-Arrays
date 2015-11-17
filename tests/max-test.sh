#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'max.js'
run_js_test '1 1 1 1 1' '0'
run_js_test '0 0 0 0' '0'
run_js_test '1 1 1 1 2' '4'
run_js_test '-9 -3 -2 -6' '2'
run_js_test '1 5 8 23 78 22 0' '4'
end_js_test