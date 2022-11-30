import { fetchWithTimeout } from "../utils/fetchWithTimeout";

export const changePassRequest = async ({ userId, senha }) =>
  fetchWithTimeout(
    `http://localhost:3001/api/usuario/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senha: senha,
      }),
      method: "PATCH",
    },
    null,
    1000
  );
