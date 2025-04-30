import { api } from "@/config/Api"

interface WebhookResponse {
  webhook: string
  token: string
}

export default async function TestWebhook({ webhook, token }: WebhookResponse): Promise<any> {
    const res = await api.get(webhook, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    })
  
    let logdata
    let status = "error" // padronizado
  
    switch (res.status) {
      case 200:
        logdata = "Webhook funcionando corretamente"
        status = "success"
        break
      case 400:
        logdata = "Erro no webhook"
        break
      case 500:
      case 502:
        logdata = "Erro no servidor"
        break
      case 503:
        logdata = "Serviço indisponível"
        break
      case 504:
        logdata = "Tempo limite excedido"
        break
      case 401:
        logdata = "Token inválido"
        break
      case 403:
        logdata = 'Acesso negado'
        break
      case 404:
        logdata = "Webhook não encontrado"
        break
      default:
        logdata = "Erro desconhecido no webhook"
    }
  
    // try {
    //   await api.post('/logs', {
    //     body: JSON.stringify({
    //         nome_automacao,
    //         log: logdata,
    //         status,
    //         data: new Date().toISOString(),
    //         id_automacao: id,
    //     }),
    //   })
    // } catch (error) {
    //   console.error("Erro ao enviar log:", error)
    // }
  
    let json: any = {}
    try {
      json = await res.json()
    } catch {
      json = { status: res.status, ok: res.ok }
    }
  
    return json
  }