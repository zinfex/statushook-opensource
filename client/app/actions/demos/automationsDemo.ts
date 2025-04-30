import { api } from "@/config/Api";

export default async function AutomationsTestReq() {
  try {
    const res = await api.get('/teste/automacoes');
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw new Error("Erro ao buscar automações");
  }
}
