//import * from "ubiq-sdk-typescript";
/*
interface Request {
  url: string;
  method: string;
  headers?: Record<string, string>;
  body?: string;
  constructor(
    url: string,
    method: string,
    headers?: Record<string, string>,
    body?: string
  );
}*/

//globalThis.Request = Request;

import createClient, { mergeHeaders } from "openapi-fetch";
import type { paths } from "./ubiq"; // generated by openapi-typescript
//import a from "./client-test";

class Response {
  //headers;
  status;
}

class Headers {
  headers;
  constructor(init) {
    if (init !== undefined) {
      throw new Error("Initializing header not implemented.");
    }
    this.headers = {};
  }
  entries() {
    return Object.entries(this.headers);
  }
  set(key, value) {
    this.headers[key] = value;
  }
  get(key) {
    return this.headers[key];
  }
  delete(key) {
    delete this.headers[key];
  }
  append(key, value) {
    if (this.headers[key] === undefined) {
      this.headers[key] = [value];
    } else {
      this.headers[key].push(value);
    }
  }
}

export function fetchMock(request) {
  if (request.url === "https://example.com/200") {
    const response = new Response();
    response.status = 200;
    return response;
  }
  if (request.url === "https://example.com/204") {
    const response = new Response();
    response.status = 204;
    return response;
  }
  if (request.url === "https://example.com/404") {
    const response = new Response();
    response.status = 404;
    return response;
  }
  if (request.url === "https://example.com/500") {
    const response = new Response();
    response.status = 500;
    return response;
  }
}

export async function main() {
  //return new Promise((resolve, reject) => {
  const client = createClient<paths>({
    baseUrl: "https://example.com",
    fetch: (request) => {
      console.log("TODO: implement fetch to host functions adapter");
      console.log(request);
      return fetchMock(request);
    },
  });

  console.log("before the await");
  const { data, error } = await client.GET("/keyValue/{key}", {
    params: {
      path: { key: "my-post" },
      query: { version: 2 },
    },
  });
  console.log("after the await");
  //  resolve("done");
  //});
}

export function greet() {
  let is_running = true;
  main()
    .then(() => {
      is_running = false;
      console.log("main has resolved");
    })
    .catch((error) => {
      console.error("error occurred in main");
      console.error(error);

      console.error();
      console.error(error.stack);
    });
  /*while (is_running) {
    //console.log("waiting for main to finish");
  }*/
  /*
  if (error) {
    console.error("error fetching data", error);
    return -1;
  }

  console.log("data", data);
  let input = Host.inputString();
  Var.set("input", input);
  const req: HttpRequest = {
    url: "https://postman-echo.com/post",
    method: "POST",
  };
  let varInput = Var.getString("input");
  if (!varInput) {
    Host.outputString("failed to get var: input");
    return -1;
  }

  let resp = Http.request(req, varInput);
  if (resp.status !== 200) {
    return -2;
  }
  const body = JSON.parse(resp.body);

*/
  console.debug("debug: single console statement");
  console.debug("debug:", "multiple", "console", "statements");

  /*
  console.log("BODY", body.data, input);
  if (body.data !== input) {
    Host.outputString("got unexpected output: " + body.data);
    return -3;
  }
*/
  console.log("HERE");

  /*
  const configLastName = Config.get("last_name");
  if (!configLastName) {
    Host.outputString("failed to get config: last_name");
    return -4;
  }

  if (`${body.data} ${configLastName}` !== "Steve Manuel") {
    Host.outputString(`got unexpected output: ${body.data} ${configLastName}`);
    return -5;
  }

  const mem = Memory.fromString("Hello, " + body.data + " " + configLastName);
  Host.outputString(mem.readString()); // TODO: ideally have a way to output memory directly
  mem.free();
  return 0;*/
}
