'use server'

import { api } from "@/config/Api";

export default async function LogsReq() {
  try {
    const res = await api.get('/logs');
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar logs:", error);
    throw new Error("Erro ao buscar logs");
  }
}
