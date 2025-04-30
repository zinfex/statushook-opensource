import { api } from "@/config/Api";

export default async function LogsTestReq() {
  try {
    const res = await api.get('/teste/logs');
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar logs:", error);
    throw new Error("Erro ao buscar logs");
  }
}
