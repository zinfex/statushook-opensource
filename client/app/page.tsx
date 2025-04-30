import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Github,
  Globe,
  LucideGithub,
  Rocket,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-black text-white h-screen overflow-y-auto">
      {/* Navbar */}
      <header className="border-b border-zinc-800 fixed top-0 left-0 right-0 bg-black z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Webhooker
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Recursos
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Depoimentos
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Preços
              </Link>
              <Link
                href="#docs"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Documentação
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link href="/signup">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Começar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500/30 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 right-10 w-72 h-72 bg-orange-500/30 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Teste. Monitore.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Automatize.
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Plataforma completa para desenvolvedores testarem, monitorarem e
              gerenciarem seus webhooks e automações com precisão e confiança.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 rounded-md">
                  Comece gratuitamente
                </Button>
              </a>
              <a href="/dashboard?demo=true">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-black hover:bg-slate-300 h-12 px-8 rounded-md"
                >
                  Versão demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="https://github.com/zinfex/webhooker-gerenciador-automacoes" target="_blank">
                <Button className="bg-[#1A1A1C] border-zinc-700 h-12 px-8 rounded-md"><Github /> Github</Button>
              </a>
            </div>
            <div className="mt-6 text-sm text-zinc-500">
              Sem cartão de crédito • Teste grátis por 14 dias
            </div>
          </div>

          {/* Code preview */}
          <div className="mt-16 max-w-3xl mx-auto rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
              </div>
              <div className="text-xs text-zinc-500">webhook-test</div>
            </div>
            <div className="p-4 text-sm font-mono">
              <p className="text-zinc-400">
                $ webhooker test --url https://seu-webhook.com
              </p>
              <p className="text-green-500 mt-2">✓ Testando conexão...</p>
              <p className="text-green-500">✓ Medindo latência...</p>
              <p className="text-zinc-400 mt-2">
                ? Método HTTP: <span className="text-white">POST</span>
              </p>
              <p className="text-zinc-400">
                ? Payload:{" "}
                <span className="text-white">{'{ "event": "test" }'}</span>
              </p>
              <p className="text-green-500 mt-2">
                ✓ Webhook testado com sucesso!
              </p>
              <p className="text-zinc-400 mt-2">Latência média: 120ms</p>
              <p className="text-orange-500 mt-2">Status: Ativo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-zinc-500 mb-8">
            EMPRESAS QUE CONFIAM EM NÓS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 w-24 bg-zinc-800 rounded-md"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tudo que você precisa para testar seus webhooks
            </h2>
            <p className="text-lg text-zinc-400">
              Uma plataforma completa com todas as ferramentas necessárias para
              testar, monitorar e gerenciar suas automações.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="h-6 w-6 text-orange-500" />}
              title="Testes de Performance"
              description="Teste a velocidade e confiabilidade dos seus webhooks com métricas detalhadas de latência e uptime."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6 text-orange-500" />}
              title="Monitoramento Global"
              description="Verifique a disponibilidade dos seus webhooks de diferentes regiões do mundo."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6 text-orange-500" />}
              title="Segurança Avançada"
              description="Teste a segurança dos seus webhooks com diferentes tipos de payloads e headers."
            />
            <FeatureCard
              icon={<Code className="h-6 w-6 text-orange-500" />}
              title="Integração Fácil"
              description="API simples e documentada para integrar com seus sistemas existentes."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6 text-orange-500" />}
              title="Automação Inteligente"
              description="Configure testes automáticos e receba alertas quando algo der errado."
            />
            <FeatureCard
              icon={<Sparkles className="h-6 w-6 text-orange-500" />}
              title="Análise Detalhada"
              description="Relatórios completos com gráficos e métricas para entender o comportamento dos seus webhooks."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Amado por desenvolvedores
            </h2>
            <p className="text-lg text-zinc-400">
              Veja o que nossos usuários estão dizendo sobre nossa plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="O Webhooker nos ajudou a reduzir em 80% os problemas com webhooks. Agora temos confiança total em nossas automações."
              author="Carlos Silva"
              role="CTO, AutomaTech"
            />
            <TestimonialCard
              quote="A melhor ferramenta que já usei para testar webhooks. Os relatórios detalhados são incríveis."
              author="Ana Oliveira"
              role="Desenvolvedora Sênior"
            />
            <TestimonialCard
              quote="Como desenvolvedor independente, o Webhooker me permite garantir que minhas automações funcionem perfeitamente."
              author="Pedro Costa"
              role="Desenvolvedor Freelancer"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Planos para todos os tamanhos
            </h2>
            <p className="text-lg text-zinc-400">
              Escolha o plano perfeito para suas necessidades. Comece
              gratuitamente, sem cartão de crédito.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Hobby"
              price="Grátis"
              description="Perfeito para projetos pessoais e experimentação."
              features={[
                "2 webhooks ativos",
                "Testes manuais",
                "Monitoramento básico",
                "Gráficos e métricas básicos"
              ]}
              buttonText="Começar Grátis"
              buttonVariant="outline"
            />
            <PricingCard
              title="Pro"
              price="U$20/mês"
              description="Ideal para startups e pequenas equipes."
              features={[
                "Webhooks ilimitados",
                "Testes avançados com agendamento",
                "Monitoramento global",
                "Alertas por email",
                "Gráficos e métricas avançadas",
              ]}
              buttonText="Começar Teste Gratuito"
              buttonVariant="default"
              highlighted={true}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/30 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para transformar seu desenvolvimento?
            </h2>
            <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
              Junte-se a milhares de desenvolvedores e empresas que já estão
              construindo o futuro com Webhooker.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 rounded-md">
                Comece Gratuitamente
              </Button>
              <Button
                variant="outline"
                className="border-zinc-700 text-black hover:bg-slate-300 h-12 px-8 rounded-md"
              >
                Ver Documentação <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                Webhooker
              </span>
              <p className="mt-4 text-sm text-zinc-500">
                Construindo o futuro do desenvolvimento web, um deploy de cada
                vez.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/zinfex/webhooker-gerenciador-automacoes" target="_blank" className="text-zinc-500 hover:text-white">
                  <LucideGithub className="h-5 w-5" />
                </a>

                
                <a href="#" className="text-zinc-500 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-white">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Produto
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Preços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Casos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Suporte
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Documentação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Guias
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                Empresa
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Carreiras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-zinc-500 hover:text-white"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-zinc-500">
              &copy; 2025 Webhooker. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-zinc-500 hover:text-white">
                Privacidade
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-white">
                Termos
              </a>
              <a href="#" className="text-sm text-zinc-500 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Components
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
      <div className="mb-4 text-orange-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="inline-block mr-1">
            ★
          </span>
        ))}
      </div>
      <p className="text-zinc-300 mb-6">"{quote}"</p>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}) {
  return (
    <div
      className={`p-6 rounded-lg border ${
        highlighted ? "border-orange-500/50" : "border-zinc-800"
      } ${
        highlighted ? "bg-zinc-900/80" : "bg-zinc-900/50"
      } flex flex-col h-full`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
        </div>
        <p className="text-zinc-400">{description}</p>
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        variant={buttonVariant}
        className={`w-full ${
          buttonVariant === "default"
            ? "bg-orange-500 hover:bg-orange-600 text-white"
            : "border-zinc-700 hover:bg-slate-300 text-black"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}
