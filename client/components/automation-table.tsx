'use client'

import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Edit, Play, Trash2 } from "lucide-react"

export function AutomationTable({ automations }) {
  return (
    <Table className="border-zinc-800">
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
                  <div className="font-medium">{automation.name}</div>
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
            <TableCell>{automation.frequency}</TableCell>
            <TableCell>{automation.nextRun}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="h-8 w-8">
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
