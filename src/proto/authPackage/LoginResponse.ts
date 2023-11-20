// Original file: src/proto/auth.proto

import type { User as _authPackage_User, User__Output as _authPackage_User__Output } from '../authPackage/User';

export interface LoginResponse {
  'success'?: (boolean);
  'error'?: (string);
  'user'?: (_authPackage_User | null);
  'accesToken'?: (string);
}

export interface LoginResponse__Output {
  'success'?: (boolean);
  'error'?: (string);
  'user'?: (_authPackage_User__Output);
  'accesToken'?: (string);
}
