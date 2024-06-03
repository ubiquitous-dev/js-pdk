/*
class Request {
  url: string;
  method: string;
  headers?: Record<string, string>;
  body?: string;
  constructor(
    url: string,
    method: string,
    headers?: Record<string, string>,
    body?: string
  ) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
  }
}

var gt: any = globalThis;
gt.Request = Request;


*/

//Object.defineProperty(globalThis, "Request", Request);

/*
class Request {
  constructor(url, method, headers, body) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
  }
}*/

// console.log("fetch.ts overriding the globalThis.Request object");
//globalThis.Request = new Proxy(Request, {});
