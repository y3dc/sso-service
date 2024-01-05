import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _sso_AuthServiceClient, AuthServiceDefinition as _sso_AuthServiceDefinition } from './sso/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  sso: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _sso_AuthServiceClient> & { service: _sso_AuthServiceDefinition }
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    User: MessageTypeDefinition
  }
}

