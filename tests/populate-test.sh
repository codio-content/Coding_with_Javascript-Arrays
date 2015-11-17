#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'populate.js'
run_js_test '8' '[ 0, 10, 20, 30, 40, 50, 60, 70 ]'
run_js_test '0' '[]'
run_js_test '1' '[ 0 ]'
run_js_test '-2' '[]'
end_js_test