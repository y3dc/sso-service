/* eslint-disable */

export const protobufPackage = "sso";

export interface User {
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  error: string;
  user: User | undefined;
  accessToken: string;
}

export interface AuthService {
  Login(request: LoginRequest): Promise<LoginResponse>;
}
