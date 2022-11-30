import { fetchWithTimeout } from "../utils/fetchWithTimeout";

export const addUser = async ({
  nomeCompleto,
  email,
  cpf,
  nascimento,
  telefone,
  senha,
}) =>
  fetchWithTimeout(
    `http://localhost:3001/api/usuario`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeCompleto,
        email,
        cpf,
        nascimento,
        telefone,
        senha,
      }),
      method: "POST",
    },
    null,
    1000
  );

export const editUser = async ({
  userId,
  nomeCompleto,
  email,
  cpf,
  nascimento,
  telefone,
  senha,
}) =>
  fetchWithTimeout(
    `http://localhost:3001/api/usuario/${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeCompleto,
        email,
        cpf,
        nascimento,
        telefone,
        senha,
      }),
      method: "PATCH",
    },
    null,
    1000
  );
