## reference:
#### https://medium.com/@rintoj/react-native-with-typescript-40355a90a5d7

#### https://github.com/improbable-eng/grpc-web/blob/master/ts/docs/code-generation.md

protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--js_out=import_style=commonjs,binary:./src/protos/ \
--ts_out=service=true:./src/protos/ \
-I ./src/protos \
./src/protos/*.proto