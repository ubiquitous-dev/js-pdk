// Extract host functions by name.
// Note: these must be declared in the d.ts file
const { myHostFunction1, myHostFunction2, debug } = Host.getFunctions();

console.log = (msg) => {
  let mem = Memory.fromString(msg);
  debug(mem.offset);
};

function greet() {
  let msg = "Hello from js 1";
  let mem = Memory.fromString(msg);
  let offset = myHostFunction1(mem.offset);
  let response = Memory.find(offset).readBytes();
  console.log("HERE");
  try {
    throw Error("This is an error");
  } catch (e) {
    console.log(e);
    console.log(e.stack);
  }
  console.log("HERE");
  //if (response != "myHostFunction1: " + msg) {
  //  throw Error(`wrong message came back from myHostFunction1: ${response}`);
  //}

  msg = { hello: "world!" };
  mem = Memory.fromJsonObject(msg);
  offset = myHostFunction2(mem.offset);
  response = Memory.find(offset).readJsonObject();
  if (response.hello != "myHostFunction2") {
    throw Error(`wrong message came back from myHostFunction2: ${response}`);
  }

  Host.outputString(`Hello, World!`);
}

module.exports = { greet };
