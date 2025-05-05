"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MetricsCard } from "@/components/metrics-card"
import { StatsChart } from "@/components/stats-chart"
import { AutomationTable } from "@/components/automation-table"
import { Github, Play, Plus, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AutomationsReq from "../actions/automations"
import LogsReq from "../actions/logs"
import AutomationsTestReq from "../actions/demos/automationsDemo"
import { useSearchParams } from "next/navigation"


export default function Page() {
  const searchParams = useSearchParams()
  const isDemo = searchParams.get("demo") === "true"

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
  const [automations, setAutomations] = useState<Automation[]>([])
  
  type LogEntry = {
    data: string
    nome_automacao: string
    log: string
    status: 'success' | 'error' | string
  }
  const [logs, setLogs] = useState<LogEntry[]>([])
  const addLog = (log: LogEntry) => {
    setLogs(prevLogs => [log, ...prevLogs])
  }

  type NewAutomation = {
    name: string
    description: string
    code: string
  }
  
  const [newAutomation, setNewAutomation] = useState<NewAutomation>({
    name: "",
    description: "",
    code: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAutomation((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSaveAutomation = () => {
    if (isDemo) {
      window.location.href = '/signup'
    }

    if (!newAutomation.name) return

    const currentDate = new Date()
    const formattedTime = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    const newItem: Automation = {
      nome: newAutomation.name,
      description: newAutomation.description || "Sem descrição",
      lastRun: `Hoje, ${formattedTime}`,
      status: "success",
      frequencia: "-",
      nextRun: "-",
    }

    setAutomations([newItem, ...automations])

    // Limpar o formulário
    setNewAutomation({
      name: "",
      description: "",
      code: "",
    })

    // Adicionar ao log
    const logElement = document.getElementById("automation-logs")
    if (logElement) {
      const newLog = document.createElement("div")
      newLog.className = "text-green-400"
      newLog.textContent = `[${formattedTime}] Automação "${newAutomation.name}" adicionada com sucesso`
      logElement.prepend(newLog)
    }
  }
 
  useEffect(() => {
    const fetchAutomations = async () => {
      const res = await (isDemo ? AutomationsTestReq() : AutomationsReq())
      setAutomations(res)
    }

    const fetchLogs = async () => {
      // const res = await LogsReq()
      // setLogs(res)
    }

    fetchAutomations()
    fetchLogs()
  }, [isDemo])  

  return (
    <div className="h-screen overflow-auto bg-black text-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold flex items-center gap-2 font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"><Zap color="#EA580C"/> Webhooker</h1>
          <div className="text-sm text-white">Gerencie e monitore suas automações em um só lugar</div>
        </div>

        <div className="flex items-center gap-2">  
          <a href="https://github.com/zinfex/webhooker-gerenciador-automacoes" target="_blank">
            <Button className="bg-[#EA580C]"><Github /> Github</Button>
          </a>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <MetricsCard
          title="Total de Automações"
          value={automations.length.toString()}
          change={{ value: "+1", percentage: "+4.2%", isPositive: true }}
        />
        <MetricsCard
          title="Execuções Hoje"
          value="142"
          change={{ value: "+28", percentage: "+24.5%", isPositive: true }}
        />
        <MetricsCard
          title="Taxa de Sucesso"
          value="98.7%"
          change={{ value: "+0.5%", percentage: "+0.5%", isPositive: true }}
        />
      </div>

      <div className="grid gap-6 mt-6 lg:grid-cols-[1fr_400px]">
        <Card className="p-6 bg-zinc-900 border-zinc-800">
          <h2 className="text-lg font-semibold mb-4 text-white">Automações Recentes</h2>
          <AutomationTable automations={automations} onAddLog={addLog} /> 
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-zinc-900 border-zinc-800 text-white">
            <h2 className="text-lg font-semibold mb-4">Adicionar Automação</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Nome da Automação</label>
                <Input
                  placeholder="Ex: Sincronização de Dados"
                  name="name"
                  value={newAutomation.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Descrição</label>
                <Input
                  placeholder="Descreva o propósito desta automação"
                  name="description"
                  value={newAutomation.description}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Disparo do seu webhook</label>
                <Input
                  placeholder="Insira a URL do seu webhook"
                  className="font-mono text-sm"
                  name="code"
                  value={newAutomation.code}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex gap-2">
                <Button className="w-full gap-2 bg-primary bg-[#EA580C]" onClick={handleSaveAutomation}>
                  <Plus className="h-4 w-4" />
                  Salvar
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-zinc-900 border-zinc-800">
            <h2 className="text-lg font-semibold mb-4 text-white">Logs de Execução</h2>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="errors">Erros</TabsTrigger>
                <TabsTrigger value="success">Sucesso</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div
                  id="automation-logs"
                  className="bg-black/50 p-3 rounded-md font-mono text-xs h-48 overflow-y-auto space-y-2"
                >
                  {logs.map((log, index) => (
                     <div key={index} className={`
                       ${log.status === 'success' ? 'text-green-400' : ''}
                       ${log.status === 'error' ? 'text-red-400' : ''}
                     `}>
                       {log.data} Automação "{log.nome_automacao}" {log.log}
                     </div>
                   ))}
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>

      <Card className="mt-6 p-6 bg-zinc-900 border-zinc-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Estatísticas de Execução</h2>
          <div className="flex gap-2 text-white">
            <Button size="sm" variant="ghost">
              Hoje
            </Button>
            <Button size="sm" variant="ghost">
              Semana
            </Button>
            <Button size="sm" variant="ghost">
              Mês
            </Button>
            <Button size="sm" variant="ghost">
              Trimestre
            </Button>
            <Button size="sm" variant="ghost">
              Ano
            </Button>
          </div>
        </div>
        <StatsChart />
      </Card>
    </div>
  )
}
