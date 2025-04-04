"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAuthStore } from "@/lib/stores/authStore";
import { apiService } from "@/lib/services/apiService";
import type { User } from "@/lib/stores/authStore"; // Importation du type User

interface LoginProps {
  onSwitchToRegister?: () => void;
  handleLogin?: () => void;
}

const Login = ({ onSwitchToRegister, handleLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Appel API avec credentials: include pour envoyer/recevoir les cookies
      const loginResponse = await apiService.post("/auth/login", {
        email,
        password,
      });

      // On s'assure que la connexion a réussi avant de faire la requête suivante
      if (loginResponse) {
        try {
          // Récupération des informations de l'utilisateur connecté
          const userResponse = await apiService.get<User>("/users/me");
          console.log("userResponse", userResponse);

          // Mise à jour du store avec les données de l'utilisateur
          login({ user: userResponse });

          if (handleLogin) {
            handleLogin();
          }
        } catch (userError) {
          console.error(
            "Erreur lors de la récupération des infos utilisateur:",
            userError
          );

          if (handleLogin) {
            handleLogin();
          }
        }
      }
    } catch (err) {
      console.error("Erreur de connexion:", err);
      setError(err instanceof Error ? err.message : "Erreur de connexion");
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 text-center">Se connecter</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="votre@email.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>

      {onSwitchToRegister && (
        <>
          <Separator className="my-6" />
          <div className="text-center">
            <p className="mb-3">Pas encore de compte ?</p>
            <Button
              variant="secondary"
              onClick={onSwitchToRegister}
              className="px-6"
            >
              S&apos;inscrire
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
