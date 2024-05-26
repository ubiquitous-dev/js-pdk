declare module "main" {
  export function greet(): I32;
}

declare module "extism:host" {
  interface user {
    debug(ptr: I64): I64;
    myHostFunction1(ptr: I64): I64;
    myHostFunction2(ptr: I64): I64;
  }
}
