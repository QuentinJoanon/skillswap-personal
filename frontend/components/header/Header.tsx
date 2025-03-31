"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LogOut, Menu, X } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  // Effet pour bloquer le défilement du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Pour les besoins de démonstration - à remplacer par un vrai système d'auth
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsMenuOpen(false);
  };

  const authenticatedMenu = (
    <>
      <nav className="w-full mt-6">
        <ul className="space-y-6 text-center">
          <li>
            <a href="#" className="block text-xl hover:text-blue-500">
              Profil
            </a>
          </li>
          <li>
            <a href="#" className="block text-xl hover:text-blue-500">
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="block text-xl hover:text-blue-500">
              Trouver un skill
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto w-full">
        <Separator className="my-6 w-full" />
        <div className="flex items-center justify-center">
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut className="mr-2" size={20} />
            <span>Déconnexion</span>
          </Button>
        </div>
      </div>
    </>
  );

  const unauthenticatedMenu = (
    <>
      <div className="w-full flex flex-col items-center mt-6">
        <div className="w-full max-w-md">
          {showLogin ? (
            <div className="p-6">
              <Login
                onSwitchToRegister={() => setShowLogin(false)}
                handleLogin={handleLogin}
              />
            </div>
          ) : (
            <div className="p-6">
              <Register
                onSwitchToLogin={() => setShowLogin(true)}
                handleLogin={handleLogin}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <header className={`w-full py-4 px-6 flex items-center justify-between`}>
      <div className="flex items-center">
        <div className="mr-3">
          <Image src="/logo.png" alt="SkillSwap Logo" width={40} height={40} />
        </div>
        <h1 className="text-4xl">SkillSwap</h1>
      </div>

      <div>
        <button
          onClick={toggleMenu}
          className="flex items-center justify-center w-10 h-10"
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-50 flex flex-col items-center p-6 overflow-y-auto">
          <Separator className="my-4 w-full" />
          {isAuthenticated ? authenticatedMenu : unauthenticatedMenu}
        </div>
      )}
    </header>
  );
};

export default Header