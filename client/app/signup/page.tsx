'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { LockIcon, MailIcon, UserIcon, UserPlusIcon } from "lucide-react"
import { api } from "@/config/Api"
import { useState } from "react"
import { criarConta } from '@/lib/criarConta';


type NovoUsuario = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const [confirmPassword, setConfirmPassword] = useState('');

  const [form, setForm] = useState<NovoUsuario>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resposta = await criarConta(form);
      if (resposta.status === 201) {
        window.location.href = '/login';
      }
    } catch (erro: any) {
      console.log(erro.response?.data?.error || 'Erro ao criar conta');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl"></div>

      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 shadow-xl relative z-10">
        <CardHeader className="space-y-1">
          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-2">
            <UserPlusIcon className="h-6 w-6 text-orange-500" />
          </div>
          <CardTitle className="text-2xl text-center text-white">Criar Conta</CardTitle>
          <CardDescription className="text-zinc-400 text-center">
            Preencha os dados abaixo para criar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-zinc-300">
              Nome Completo
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-zinc-500">
                <UserIcon className="h-5 w-5" />
              </div>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 pl-10 text-white focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-300">
              Email
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-zinc-500">
                <MailIcon className="h-5 w-5" />
              </div>
              <Input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="bg-zinc-800 border-zinc-700 pl-10 text-white focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-zinc-300">
              Senha
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-zinc-500">
                <LockIcon className="h-5 w-5" />
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="bg-zinc-800 border-zinc-700 pl-10 text-white focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-zinc-300">
              Confirmar Senha
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-zinc-500">
                <LockIcon className="h-5 w-5" />
              </div>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-zinc-800 border-zinc-700 pl-10 text-white focus:border-orange-500 focus:ring-orange-500/20"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className="border-zinc-700 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
            />
            <Label htmlFor="terms" className="text-sm text-zinc-400">
              Eu concordo com os{" "}
              <a href="#" className="text-orange-500 hover:text-orange-400">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a href="#" className="text-orange-500 hover:text-orange-400">
                Política de Privacidade
              </a>
            </Label>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={handleSubmit}>Criar Conta</Button>
        </CardFooter>
        <div className="text-center pb-6 text-zinc-400 text-sm">
          Já tem uma conta?{" "}
          <a href="/login" className="text-orange-500 hover:text-orange-400">
            Entrar
          </a>
        </div>
      </Card>
    </div>
  )
}
