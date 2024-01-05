// Original file: src/proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { LoginRequest as _sso_LoginRequest, LoginRequest__Output as _sso_LoginRequest__Output } from '../sso/LoginRequest';
import type { LoginResponse as _sso_LoginResponse, LoginResponse__Output as _sso_LoginResponse__Output } from '../sso/LoginResponse';

export interface AuthServiceClient extends grpc.Client {
  Login(argument: _sso_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _sso_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _sso_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _sso_LoginRequest, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _sso_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _sso_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _sso_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _sso_LoginRequest, callback: grpc.requestCallback<_sso_LoginResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_sso_LoginRequest__Output, _sso_LoginResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_sso_LoginRequest, _sso_LoginResponse, _sso_LoginRequest__Output, _sso_LoginResponse__Output>
}
