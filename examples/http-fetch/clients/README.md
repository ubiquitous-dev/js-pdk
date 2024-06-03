# Description

This repository is for generating typescript clients used for testing the fetch implementation, to ensure OpenAPI spec generators work properly with all the most popular typescript client generators.

## openapi.yml

The spec that's used as the basis for the generated clients is for httpbin.org, which is an opne-source http testing website by the python `requests` development team.  It contains fairly comprehensive endpoints that allow mocking of various different response types, and is also a very comprehensive API, which helps us test that the generated fetch implementation is compliant with expectations.  However, this library version is swagger 2, which is pretty old, so this was migrated by pasting the `swagger-2_0-spec.json` file into https://editor.swagger.io, doing `Edit > Convert to OpenAPI 3` and fixing the minor issues where the `/{anything}` and `/etag/{etag}` didn't define the parameter types.


# openapi-fetch

[openapi-fetch](https://openapi-ts.pages.dev/openapi-fetch/) is a simple client that's strongly typed,  high performance, and minimal dependency.

## Client generation

Dependencies: node (20.x used) and npm

The client can be generated via the following commands:
```bash
npx openapi-typescript openapi.yml -o ./openapi-fetch/openapi-fetch-client.d.ts
mkdir -p ../src/clients/openapi-fetch/
cp ./openapi-fetch/openapi-fetch-client.d.ts ../src/clients/openapi-fetch/
```


# openapi-ts

# openapi-typescript-fetch


# openapi-typescript-codegen

# axios


# TODO: graphql?