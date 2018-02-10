## reference:
#### https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7

#### https://github.com/improbable-eng/grpc-web/blob/master/ts/docs/code-generation.md

grpc-web 做的尝试

protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:./src/protos/ \
--ts_out=service=true:./src/protos/ \
-I ./src/protos \
./src/protos/*.proto

复制 shim.js 和 grpc生成的 js 到 build

---

node_module/grpc-web-client/dist/transports/nodeHttp.js
var http = require("stream-http");
var https = require("https-browserify");
var url = require("url");

---

node_module/https-browserify
var http = require("stream-http")