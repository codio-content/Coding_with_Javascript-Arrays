#!/bin/bash
. /home/codio/workspace/tests/js-test-lib.sh

start_js_test 'strarray.js'
run_js_test '' "[ 'AAA', 'BBB', 'CCC' ]"
end_js_test
