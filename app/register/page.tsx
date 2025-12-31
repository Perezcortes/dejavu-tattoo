"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <main className="min-h-screen bg-dark flex items-center justify-center p-4 relative overflow-hidden selection:bg-primary selection:text-white">
      
      {/* Fondo Ambient Invertido */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-black pointer-events-none"></div>

      <Link href="/" className="absolute top-8 left-8 text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest z-50">
        <ArrowLeft className="w-4 h-4" /> Inicio
      </Link>

      {/* --- TARJETA PRINCIPAL --- */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        // CAMBIO: Flex-col para móvil (apilado) y flex-row para escritorio (lado a lado)
        className="w-full max-w-5xl bg-surface/50 backdrop-blur-md rounded-3xl shadow-2xl shadow-black border border-white/5 overflow-hidden flex flex-col md:flex-row relative z-10"
      >
        
        {/* --- SECCIÓN IMAGEN (Diosa Azteca) --- */}
        {/* CAMBIO: Se muestra primero en móvil (order-first por defecto) pero segundo en escritorio (md:order-last) */}
        <div className="w-full h-48 md:h-auto md:w-1/2 relative bg-black overflow-hidden md:order-last">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="/tattoo3.jpeg" 
            alt="Aztec Goddess Tattoo" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/80 via-transparent to-transparent z-10"></div>
          
          {/* Separador Diagonal (Solo visible en escritorio) */}
          <div className="hidden md:block absolute top-0 left-0 w-16 h-[120%] bg-surface-dark -skew-x-12 -translate-x-8 z-20 border-r border-primary/30 shadow-[0_0_15px_rgba(209,86,17,0.3)]"></div>

          <div className="absolute bottom-6 left-6 md:bottom-12 md:right-12 md:left-auto z-30 text-left md:text-right">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: '3rem' }} 
              transition={{ delay: 0.5, duration: 0.5 }}
              className="h-1 bg-primary mb-2 md:mb-6 md:ml-auto"
            />
            <h2 className="font-display text-2xl md:text-4xl text-white leading-tight drop-shadow-lg">
              Únete <br/> <span className="text-primary">al Legado</span>
            </h2>
            <p className="hidden md:block font-serif italic text-gray-400 mt-4 text-sm max-w-xs ml-auto border-r border-white/20 pr-4">
              "Tu cuerpo es el lienzo, nosotros ponemos la maestría."
            </p>
          </div>
        </div>

        {/* --- SECCIÓN FORMULARIO --- */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-surface-dark">
          
          <div className="mb-8 text-center md:text-left">
            <h3 className="font-display text-3xl text-white mb-2">Crear Cuenta</h3>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Únete al colectivo Deja Vu</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Nombre Completo</label>
              <div className="relative group">
                <User className="w-5 h-5 text-gray-600 absolute left-3 top-3 group-focus-within:text-primary transition-colors" />
                <input type="text" placeholder="Ej. Andres Villagomez" className="w-full bg-black/40 border border-gray-800 rounded-xl py-3 pl-10 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-serif"/>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Correo</label>
              <div className="relative group">
                <Mail className="w-5 h-5 text-gray-600 absolute left-3 top-3 group-focus-within:text-primary transition-colors" />
                <input type="email" placeholder="usuario@email.com" className="w-full bg-black/40 border border-gray-800 rounded-xl py-3 pl-10 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-serif"/>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Contraseña</label>
              <div className="relative group">
                <Lock className="w-5 h-5 text-gray-600 absolute left-3 top-3 group-focus-within:text-primary transition-colors" />
                <input type="password" placeholder="••••••••" className="w-full bg-black/40 border border-gray-800 rounded-xl py-3 pl-10 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-serif"/>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 px-1">
              <input type="checkbox" id="terms" className="mt-1 rounded border-gray-700 bg-black/50 text-primary focus:ring-primary/50" />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                Acepto los <a href="#" className="text-primary hover:text-white underline">Términos de Servicio</a> y la <a href="#" className="text-primary hover:text-white underline">Política de Privacidad</a> del estudio.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-primary to-orange-700 hover:from-orange-600 hover:to-primary text-white font-mono font-bold uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Registrarse"}
            </button>

            <div className="text-center pt-2">
              <span className="text-gray-600 text-sm">¿Ya tienes cuenta? </span>
              <Link href="/login" className="text-primary hover:text-white font-bold text-sm ml-1 transition-colors relative group">
                Iniciar Sesión
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </div>
          </form>
        </div>

      </motion.div>
    </main>
  );
}