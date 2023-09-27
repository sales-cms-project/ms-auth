#!/bin/bash

npx protoc \
    --plugin=node_modules/.bin/protoc-gen-ts_proto \
    -I=./node_modules/@sales-cms-project/lib-proto/proto \
    --ts_proto_out=src/domain/proto \
    node_modules/@sales-cms-project/lib-proto/proto/auth.proto \
    --ts_proto_opt=nestJs=true \
    --ts_proto_opt=fileSuffix=.pb