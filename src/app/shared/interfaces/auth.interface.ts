export interface LoginBody {
  username: string,
  password: string
}

export interface TokenResponse {
  access_token: string,
  refresh_token: string,
  token_type: string
}

export type RefreshToken  = Pick<TokenResponse, "refresh_token">