from extism import host_fn, Plugin, set_log_file
import sys
import json

set_log_file("stdout", level='info')

@host_fn()
def debug(input: str) -> str:
    print("Got input debug: " + input)
    return "debug: " + input

@host_fn()
def myHostFunction1(input: bytes) -> bytes:
    for i in input:
        if i == 0:
            raise ValueError("Input cannot contain null bytes")
        print("input[{i}] ".format_map(locals()) + str(i))
    #print("Got input myHostFunction1: " + input)
    return "myHostFunction1: abcd".encode('utf-8')

@host_fn()
def myHostFunction2(input: str) -> str:
    myobj = json.loads(input)
    print("Got input myHostFunction2: " + str(myobj))
    myobj["hello"] = "myHostFunction2"
    return json.dumps(myobj)

with Plugin(open(sys.argv[1], "rb").read(), wasi=True) as plugin:
    result = plugin.call("greet", b"Benjamin")
    print(result)

