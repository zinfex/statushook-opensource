'use client'

import { useEffect, useState } from "react"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Edit, Play, Trash2 } from "lucide-react"
import TestWebhook from "@/app/actions/automation-test-play"

export function AutomationTable({ automations }) {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"loading" | "success" | "">("")
  const [showModal, setShowModal] = useState(false)

  const testAutomation = async (webhook, token, nome_automacao, id) => {
    setMessage("Carregando...")
    setStatus("loading")
    setShowModal(true)
  
    try {
      const res = await TestWebhook(webhook, token, nome_automacao, id)
      console.log("Resposta do teste:", res)
  
      if (res.status === 200) {
        setMessage("Funcionando corretamente")
        setStatus("success")
  
        // Só inicia o timer depois de mostrar "Funcionando corretamente"
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
      setMessage("Erro ao testar automação")
      setStatus("")
    }
  }

  return (
    <Table className="border-zinc-800">
      {showModal && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded shadow-lg z-50 animate-slide-down
            ${status === "loading" ? "bg-black border-2 border-dotted border-amber-500 text-white" : ""}
            ${status === "success" ? "bg-green-600 text-white" : ""}
          `}
        >
          {message}
        </div>
      )}
      <TableHeader>
        <TableRow className="border-zinc-800 hover:bg-zinc-800/50">
          <TableHead>Automação</TableHead>
          <TableHead>Última Execução</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Frequência</TableHead>
          <TableHead>Próxima Execução</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {automations.map((automation, index) => (
          <TableRow key={index} className="border-zinc-800 hover:bg-zinc-800/50 text-white">
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                </Avatar>
                <div>
                  <div className="font-medium">{automation.nome}</div>
                  <div className="text-xs text-muted-foreground">{automation.description}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{automation.lastRun}</TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={`
                  ${automation.status === "success" ? "border-green-500 text-green-500 bg-green-500/10" : ""}
                  ${automation.status === "warning" ? "border-yellow-500 text-yellow-500 bg-yellow-500/10" : ""}
                  ${automation.status === "error" ? "border-red-500 text-red-500 bg-red-500/10" : ""}
                `}
              >
                {automation.status === "success" && "Sucesso"}
                {automation.status === "warning" && "Aviso"}
                {automation.status === "error" && "Erro"}
              </Badge>
            </TableCell>
            <TableCell>{automation.frequencia}</TableCell>
            <TableCell>{automation.nextRun}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => testAutomation(
                       automation.disparo, 
                       automation.token,
                       automation.nome,
                       automation.id
                     )}>
                   <Play className="h-4 w-4"/>
                 </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-red-500 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
