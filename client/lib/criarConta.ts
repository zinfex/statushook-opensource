import { api } from "@/config/Api";

type NovoUsuario = {
  name: string;
  email: string;
  password: string;
};

export async function criarConta(data: NovoUsuario) {
  const resposta = await api.post("/usuarios", data);
  return resposta;
}
