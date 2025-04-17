import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MetricsCard } from "@/components/metrics-card"
import { StatsChart } from "@/components/stats-chart"
import { AutomationTable } from "@/components/automation-table"
import { BarChart3, Clock, Code, Github, LayoutDashboard, LifeBuoy, Play, Plus, Settings, Zap } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <div className="">
        <main className="p-6 overflow-y-auto h-screen">
          <div className="mb-6 flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white flex items-center gap-2"><Zap className="text-[#EA580C]"/> Webhooker</h1>

              <div className="text-sm text-muted-foreground text-white">Gerencie e monitore suas automações em um só lugar</div>
            </div>
            <Button className="gap-2 bg-primary bg-[#EA580C]">
              <Github className="h-4 w-4"/>
              Github
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <MetricsCard
              title="Total de Automações"
              value="3"
              change={{ value: "+3", percentage: "+14.2%", isPositive: true }}
            />
            <MetricsCard
              title="Execuções Hoje"
              value="3"
              change={{ value: "+28", percentage: "+24.5%", isPositive: true }}
            />
            <MetricsCard
              title="Taxa de Sucesso"
              value="60%"
              change={{ value: "+0.5%", percentage: "+0.5%", isPositive: true }}
            />
          </div>

          <div className="grid gap-6 mt-6 lg:grid-cols-[1fr_400px] text-white">
            <Card className="p-6 bg-zinc-900 border-zinc-800">
              <h2 className="text-lg font-semibold mb-4 text-white">Automações Recentes</h2>
              <AutomationTable />
            </Card>

            <div className="space-y-6 text-white">
              <Card className="p-6 bg-zinc-900 border-zinc-800 text-white">
                <h2 className="text-lg font-semibold mb-4">Adicionar Automação</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nome da Automação</label>
                    <Input placeholder="Ex: Sincronização de Dados" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Descrição</label>
                    <Input placeholder="Descreva o propósito desta automação" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Webhook de disparo da automação</label>
                    <Input
                      placeholder="Cole a URL do seu webhook aqui"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button className="w-full gap-2 bg-primary hover:bg-primary/90 bg-[#EA580C]">
                      <Plus className="h-4 w-4 " />
                      Salvar
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-zinc-900 border-zinc-800 ">
                <h2 className="text-lg font-semibold mb-4 text-white">Logs de Execução</h2>
                <Tabs defaultValue="all ">
                  <TabsList className="mb-4 text-white">
                    <TabsTrigger value="all">Todos</TabsTrigger>
                    <TabsTrigger value="errors">Erros</TabsTrigger>
                    <TabsTrigger value="success">Sucesso</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-0">
                    <div className="bg-black/50 p-3 rounded-md font-mono text-xs h-48 overflow-y-auto space-y-2">
                      <div className="text-green-400">[14:32:05] Automação "Backup Diário" executada com sucesso</div>
                      <div className="text-yellow-400">
                        [14:30:22] Aviso: Automação "Sincronização" demorou mais que o esperado
                      </div>
                      <div className="text-red-400">
                        [14:28:15] Erro: Automação "Envio de Relatórios" falhou - Timeout
                      </div>
                      <div className="text-green-400">
                        [14:25:01] Automação "Verificação de Integridade" executada com sucesso
                      </div>
                      <div className="text-green-400">
                        [14:20:45] Automação "Limpeza de Cache" executada com sucesso
                      </div>
                      <div className="text-muted-foreground">
                        [14:15:30] Iniciando execução programada de automações
                      </div>
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
        </main>
      </div>
    </div>
  )
}
