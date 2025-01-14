
"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { register, error } = useAuth();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(name, username, password, passwordConfirmation);
  };

  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col max-w-lg p-12 mx-auto text-center  bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold ">Página de Registro</h1>
        <form className="flex flex-col items-center gap-6" onSubmit={handleRegister}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 text-black bg-white border border-gray-300 rounded-lg outline-none"
            type="text"
            placeholder="Digite seu nome"
            required
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 text-black bg-white border border-gray-300 rounded-lg outline-none"
            type="email"
            placeholder="Digite seu email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 text-black bg-white border border-gray-300 rounded-lg outline-none"
            type="password"
            placeholder="Digite sua senha"
            required
          />
          <input
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full p-3 text-black bg-white border border-gray-300 rounded-lg outline-none"
            type="password"
            placeholder="Confirme sua senha"
            required
          />
          <button
            className="w-full px-6 py-3 font-bold bg-neutral-300 transition duration-200"
            type="submit"
          >
            Registrar
          </button>
          <p className="mt-4 text-sm">Já tem uma conta?</p>
          <a className="text-blue-400 hover:underline" href="/login">
            Clique aqui
          </a>

          {error && <p className="mt-2 text-red-400">{error?.message}</p>}
        </form>
      </div>
    </main>
  );
};

export default Page;
