#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'numsearch.js'
run_js_test '1 3 11 42 12 42' '3'
run_js_test '1 3 11 42 12 2' '-1'
run_js_test '1' '-1'
end_js_test