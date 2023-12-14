#!/bin/bash

# npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/ src/proto/*.proto
protoc -I ./src/proto --plugin=protoc-gen-ts_proto=.\\node_modules\\.bin\\protoc-gen-ts_proto.cmd --ts_proto_out=./src/proto --ts_proto_opt=onlyTypes=true  ./src/proto/auth.proto

# protoc --plugin=$(npm root)/.bin/protoc-gen-ts_proto \
#  --ts_proto_out=dist \
#  --ts_proto_opt=outputServices=grpc-js \
#  --ts_proto_opt=esModuleInterop=true \
#  --ts_proto_opt=returnObservable=true \
#  -I=src/ src/**/*.proto

# google.protobuf.Timestamp