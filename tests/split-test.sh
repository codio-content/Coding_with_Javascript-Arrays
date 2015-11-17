#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'split.js'
run_js_test '1 3 5 7 9' $'[]\n[ 1, 3, 5, 7, 9 ]'
run_js_test '2 4 6' $'[ 2, 4, 6 ]\n[]'
run_js_test '1 2 3 4 5 6 7 8 9' $'[ 2, 4, 6, 8 ]\n[ 1, 3, 5, 7, 9 ]'
end_js_test