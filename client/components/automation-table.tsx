"use client"

import { useEffect, useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Edit, Logs, Play, Trash2, X } from "lucide-react"
import TestWebhook from "@/app/actions/automation-test-play"
import { useSearchParams } from "next/navigation"
import LogsReq from "@/app/actions/logs"
import { Card } from "./ui/card"
import ModalEditAutomation from "@/components/modal/modalEditAutomation"

type Automation = {
  id: string
  nome: string
  description: string
  ultima_execucao: string
  frequencia: string
  disparo: string
  token: string
}

type AutomationTableProps = {
  automations: Automation[]
  onAddLog: (log: {
    data: string
    nome_automacao: string
    log: string
    status: 'success' | 'error'
  }) => void
}

export interface LogEntry {
  id_automacao: number  
  data: string
  nome_automacao: string
  log: string
  status: 'success' | 'error' | 'warning'
}

export function AutomationTable({ automations, onAddLog }: AutomationTableProps) {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"loading" | "success" | "">("")
  const [showModal, setShowModal] = useState(false)
  const [showLogs, setShowLogs] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [currentId, setCurrentId] = useState<number | null>(null)
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null)
  const [loadingAutomationId, setLoadingAutomationId] = useState<number | null>(null)
  const searchParams = useSearchParams()
  const isDemo = searchParams.get("demo") === "true"

  useEffect(() => {
    async function fetchLogs() {
      const res = await LogsReq()
      const arr = (res.results ?? res) as LogEntry[]
      setLogs(arr.map((l) => ({ ...l, id_automacao: Number(l.id_automacao) })))
    }
    fetchLogs()
  }, [automations])

  const testAutomation = async (webhook: string, token: string, nome: string, id: number) => {
    setLoadingAutomationId(Number(id))
    setMessage("Carregando...")
    setStatus("loading")
    setShowModal(true)

    try {
      const res = await TestWebhook(webhook, token)
      if (isDemo) await new Promise(resolve => setTimeout(resolve, 3000))

      if (res.status === 200) {
        setLoadingAutomationId(null)
        setMessage("Funcionando corretamente")
        setStatus("success")

        onAddLog({
          data: new Date().toLocaleString(),
          nome_automacao: nome,
          log: "testado com sucesso",
          status: "success",
        })

        setTimeout(() => {
          setShowModal(false)
          setStatus("")
          setMessage("")
        }, 3000)
      } else {
        setMessage("Algo deu errado")
        setStatus("")
      }
    } catch (err) {
      console.error("Erro ao testar automação:", err)

      onAddLog({
        data: new Date().toLocaleString(),
        nome_automacao: webhook,
        log: "falhou ao testar",
        status: "error",
      })

      setMessage("Erro ao testar automação")
      setStatus("")
    }
  }

  function editAutomation(automation: Automation) {
    setSelectedAutomation(automation)
    setShowEdit(true)
  }

  function trashAutomation(id: number) {
    if (isDemo) return window.location.href = '/signup'
  }


  function logsAutomation(id: number) {
    if (isDemo) return window.location.href = '/signup'
    setCurrentId(id)
    setShowLogs(true)
  }

  const filteredLogs = logs.filter(log => Number(log.id_automacao) === Number(currentId))


  return (
    <>
      {showModal && (
        <div className={[
          'fixed top-4 left-1/2 -translate-x-1/2 rounded px-6 py-2 z-50 animate-slide-down shadow-lg',
          status === 'loading' ? 'bg-black border-2 border-dotted border-amber-500 text-white' : '',
          status === 'success' ? 'bg-green-600 text-white' : '',
        ].join(' ')}>
          {message}
        </div>
      )}

      {showLogs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={() => setShowLogs(false)}>
          <div className="w-full max-w-lg animate-slide-in sm:rounded-l-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <Card className="h-full bg-zinc-900 border-zinc-800 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Logs de Execução</h2>
                <Button size="icon" variant="ghost" onClick={() => setShowLogs(false)}>
                  <X className="h-4 w-4 text-white" />
                </Button>
              </div>
              <div id="automation-logs" className="h-80 overflow-y-auto space-y-2 rounded-md bg-black/50 p-3 font-mono text-xs">
                {filteredLogs.map((log, idx) => (
                  <div
                    key={`${log.id_automacao}-${log.data}-${idx}`}
                    className={
                      log.status === 'success' ? 'text-green-400'
                      : log.status === 'error' ? 'text-red-400'
                      : 'text-yellow-400'
                    }
                  >
                    {log.data} Automação &quot;{log.nome_automacao}&quot; {log.log}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {selectedAutomation && (
        <ModalEditAutomation
          automation={selectedAutomation}
          open={showEdit}
          onClose={() => {
            setShowEdit(false)
            setSelectedAutomation(null)
          }}
          onSave={(updatedAutomation) => {
            // Atualizar lista ou API
            setShowEdit(false)
            setSelectedAutomation(null)
          }}
        />
      )}

      <Table className="border-zinc-800">
        <TableHeader>
            <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
              <TableHead>Automação</TableHead>
              <TableHead>Última Execução</TableHead>
              <TableHead>Frequência</TableHead>
              <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {automations.map((automation) => (
            <TableRow key={automation.id} className={`border-zinc-800 hover:bg-zinc-800/50 text-white ${
              loadingAutomationId === automation.id ? 'bg-shimmer-gradient animate-shimmer bg-[length:200%_100%]' : ''
            }`}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#EA580C]">ID:{automation.id}</span>
                  <div>
                    <div className="font-medium">{automation.nome}</div>
                    <div className="text-xs text-muted-foreground">{automation.description}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{automation.ultima_execucao}</TableCell>
              <TableCell>{automation.frequencia}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() =>
                    testAutomation(
                      automation.disparo,
                      automation.token,
                      automation.nome,
                      Number(automation.id)
                    ) 
                  }>
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => editAutomation(automation)} className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => logsAutomation(Number(automation.id))} className="h-8 w-8">
                    <Logs className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => trashAutomation(Number(automation.id))} className="h-8 w-8 text-red-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
