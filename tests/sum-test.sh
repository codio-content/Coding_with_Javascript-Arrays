#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'sum.js'
run_js_test '1 3 5 7 9' '25'
run_js_test '0 0 0' '0'
run_js_test '-2 -2 -2' '-6'
end_js_test