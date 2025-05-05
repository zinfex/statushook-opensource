
import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Pencil } from "lucide-react"
import { useSearchParams } from "next/navigation"

type Automation = {
  id: string
  nome: string
  description: string
  disparo: string
  frequencia: string
  token: string
  method?: string
  headers?: string
  body?: string
}

type Props = {
    automation: Automation
    onSave: (updated: Automation) => void
    onClose: () => void
    open: boolean
  }


export default function ModalEditAutomation({ automation, onSave, onClose, open }: Props) {
    const [formData, setFormData] = useState<Automation>({ ...automation })

    const handleChange = (key: keyof Automation, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const searchParams = useSearchParams()
    const isDemo = searchParams.get("demo") === "true"

    const handleSave = () => {
        if (isDemo) { window.location.href = "/signup"}

        onSave(formData)
    }

  return (
    <Dialog open={open} onOpenChange={onClose}>

      <DialogContent className="sm:max-w-lg bg-zinc-900 border border-zinc-700">
        <DialogHeader>
          <DialogTitle className="text-white">Editar Automação</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Altere os campos abaixo e clique em salvar.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 text-white">
          <Input
            value={formData.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            placeholder="Nome da automação"
          />
          <Input
            value={formData.disparo}
            onChange={(e) => handleChange("disparo", e.target.value)}
            placeholder="URL da webhook"
          />
          <Input
            value={formData.token}
            onChange={(e) => handleChange("token", e.target.value)}
            placeholder="Token de acesso"
          />
          <Input
            value={formData.frequencia}
            onChange={(e) => handleChange("frequencia", e.target.value)}
            placeholder="Frequência (ex: diária, semanal...)"
          />
          <Textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            placeholder="Descrição da automação"
          />
          <Select
            value={formData.method || "POST"}
            onValueChange={(value) => handleChange("method", value)}
          >
            <SelectTrigger className="text-black">
              <SelectValue placeholder="Método HTTP" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GET">GET</SelectItem>
              <SelectItem value="POST">POST</SelectItem>
              <SelectItem value="PUT">PUT</SelectItem>
              <SelectItem value="DELETE">DELETE</SelectItem>
            </SelectContent>
          </Select>

          <Textarea
            value={formData.headers || ""}
            onChange={(e) => handleChange("headers", e.target.value)}
            placeholder='Headers (JSON ou chave: valor)'
          />

          <Textarea
            value={formData.body || ""}
            onChange={(e) => handleChange("body", e.target.value)}
            placeholder="Body (JSON)"
          />
        </div>

        <DialogFooter>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSave}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
