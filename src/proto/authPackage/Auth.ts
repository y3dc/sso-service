// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginRequest as _authPackage_LoginRequest, LoginRequest__Output as _authPackage_LoginRequest__Output } from '../authPackage/LoginRequest';
import type { LoginResponse as _authPackage_LoginResponse, LoginResponse__Output as _authPackage_LoginResponse__Output } from '../authPackage/LoginResponse';

export interface AuthClient extends grpc.Client {
  Login(argument: _authPackage_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authPackage_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authPackage_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _authPackage_LoginRequest, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authPackage_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authPackage_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authPackage_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _authPackage_LoginRequest, callback: grpc.requestCallback<_authPackage_LoginResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_authPackage_LoginRequest__Output, _authPackage_LoginResponse>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_authPackage_LoginRequest, _authPackage_LoginResponse, _authPackage_LoginRequest__Output, _authPackage_LoginResponse__Output>
}
