import { api } from './api-client'

interface SignInWitchPasswordRequest {
  email: string
  password: string
}

interface SignInWitchPasswordResponse {
  token: string
}

export async function signInWithPassword({
  email,
  password,
}: SignInWitchPasswordRequest) {
  const result = await api
    .post('sessions/password', {
      json: {
        email,
        password,
      },
    })
    .json<SignInWitchPasswordResponse>()

  return result
}
