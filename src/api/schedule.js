import { fetchWithTimeout } from "../utils/fetchWithTimeout";

export const addScheduleItem = async ({
  idUsuario,
  nomeCliente,
  telefoneCliente,
  dataAgendada,
  horarioAgendado,
  observacao,
}) =>
  fetchWithTimeout(
    `http://localhost:3001/api/agendamento`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuario: idUsuario,
        nomeCliente: nomeCliente,
        telefoneCliente: telefoneCliente,
        dataAgendada: dataAgendada,
        horarioAgendado: horarioAgendado,
        observacao: observacao,
        ativo: true,
      }),
      method: "POST",
    },
    null,
    1000
  );
