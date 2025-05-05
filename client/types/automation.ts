type Automation = {
    id: string
    nome: string
    description: string
    lastRun: string
    status: "success" | "warning" | "error"
    frequencia: string
    nextRun: string
    disparo: string
    token: string
}
  