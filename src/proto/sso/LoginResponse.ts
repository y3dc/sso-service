// Original file: src/proto/auth.proto

import type { User as _sso_User, User__Output as _sso_User__Output } from '../sso/User';

export interface LoginResponse {
  'success'?: (boolean);
  'error'?: (string);
  'user'?: (_sso_User | null);
  'accessToken'?: (string);
}

export interface LoginResponse__Output {
  'success'?: (boolean);
  'error'?: (string);
  'user'?: (_sso_User__Output);
  'accessToken'?: (string);
}
