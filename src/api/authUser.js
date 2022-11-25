import { fetchWithTimeout } from '../utils/fetchWithTimeout';

export const authUserRequest = async ({email, senha}) => 
  fetchWithTimeout(
      'http://localhost:3001/api/auth',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
        credentials: 'include',
        method: 'POST'
      },
      null,
      1000,
    );
