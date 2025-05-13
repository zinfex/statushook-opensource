// src/lib/entrarConta.ts

import { api } from "@/config/Api";

type Credenciais = {
  email: string;
  password: string;
};

export async function entrarConta(dados: Credenciais) {
  try {
    const resposta = await api.post("/usuarios/login", dados);

    localStorage.setItem("token", resposta.data.token);
    localStorage.setItem("usuario", JSON.stringify(resposta.data.usuario));

    return {
      status: resposta.status,
    };
  } catch (erro: any) {
    return {
      status: erro.response?.status || 500,
      message: erro.response?.data?.error || "Erro desconhecido ao fazer login",
    };
  }
}
