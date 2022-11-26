import { fetchWithTimeout } from "../utils/fetchWithTimeout";

export const recoverUserMailRequest = async ({ email, senha }) =>
  fetchWithTimeout(
    "http://localhost:3001/api/recover",
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
      method: "POST",
    },
    null,
    1000
  );
