'use server'

import { api } from "@/config/Api";

export default async function AutomationsReq() {
  try {
    const res = await api.get('/automacoes');
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw new Error("Erro ao buscar automações");
  }
}
