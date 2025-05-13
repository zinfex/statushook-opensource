'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { entrarConta } from "@/lib/entrarConta";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const resultado = await entrarConta({ email, password });

    if (resultado?.status === 200 || resultado?.status === 201) {
      window.location.href = "/dashboard";
    } else {
      setMensagem(resultado?.message || "Erro ao fazer login");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-90 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-orange-500/10 blur-3xl"></div>

      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 shadow-xl relative z-10">
        <form onSubmit={handleLogin}>
          <CardHeader className="space-y-1">
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto mb-2">
              <UserIcon className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle className="text-2xl text-center text-white">Entrar</CardTitle>
            <CardDescription className="text-zinc-400 text-center">
              Digite suas credenciais para acessar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
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
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 pl-10 text-white focus:border-orange-500 focus:ring-orange-500/20"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  className="border-zinc-700 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <Label htmlFor="remember" className="text-sm text-zinc-400">
                  Lembrar-me
                </Label>
              </div>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-400">
                Esqueceu a senha?
              </a>
            </div>
            {mensagem && <p className="text-sm text-red-500">{mensagem}</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
              Entrar
            </Button>
          </CardFooter>
        </form>
        <div className="text-center pb-6 text-zinc-400 text-sm">
          Não tem uma conta?{" "}
          <a href="/signup" className="text-orange-500 hover:text-orange-400">
            Cadastre-se
          </a>
        </div>
      </Card>
    </div>
  );
}
