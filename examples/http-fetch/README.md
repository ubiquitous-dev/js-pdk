# Extism JS PDK Plugin

See more documentation at https://github.com/extism/js-pdk and
[join us on Discord](https://extism.org/discord) for more help.


# Building the Example

## Requirements

Before starting, ensure the PDK is built and exists at `../../target/release/extism-js` by running `make` in the root directory of the Extism project.  For more details on building the extism js library, see the root level README.md file.  Alternatively, install the latest version of the extism-js library and change the `build` script in `package.json`.

Additionally, you will need to install/update the `extism` cli to the latest version.

## Building

First, install packages via `npm install`.

After packages are installed, build the example using `npm run build`.

# Testing the Example

Once the example code has been built, you should have a file called `http-fetch.wasm` in the root of the `examples` folder.  At this point, the `extism-js-pdk` has served its purpose.  The wasm file that has been built is a standard extism-enabled wasm file that can be executed via the extism runtime.

If you have extism checked out as source, use the path to the extism source.  Otherwise, once you can use the below command
You can execute this code by running `extism call http-fetch.wasm greet --input="Benjamin" --wasi --allow-host https://postman-echo.com`


# TODO: remove this
rebuild extism pdk: `cd .. && make && cd examples`
rebuild http-fetch test app: `cd http-fetch && npm run build && cd ..`
call http-fetch test app: `extism call http-fetch.wasm greet --input="Benjamin" --wasi --allow-host "postman-echo.com" --verbose --log-level trace`