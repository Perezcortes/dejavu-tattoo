"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Importamos animación
import { Mail, Lock, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="min-h-screen bg-dark flex items-center justify-center p-4 relative overflow-hidden selection:bg-primary selection:text-white">

            {/* Fondo Ambient con Ruido */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black pointer-events-none"></div>

            <Link href="/" className="absolute top-8 left-8 text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-xs font-mono uppercase tracking-widest z-50">
                <ArrowLeft className="w-4 h-4" /> Inicio
            </Link>

            {/* --- TARJETA PRINCIPAL --- */}
            <motion.div
                initial={{ opacity: 0, y: 20, rotateX: 5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-5xl bg-surface/50 backdrop-blur-md rounded-3xl shadow-2xl shadow-black border border-white/5 overflow-hidden flex flex-col md:flex-row relative z-10"
                style={{ perspective: '1000px' }}
            >

                {/* --- IZQUIERDA: IMAGEN CON CORTE --- */}
                <div className="w-full h-48 md:w-1/2 md:h-auto relative bg-black overflow-hidden">          {/* Imagen de fondo */}
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                        src="/tattoo2.jpeg"
                        alt="Samurai Tattoo"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />

                    {/* Overlay Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10"></div>

                    {/* Forma Diagonal Decorativa (El separador) */}
                    <div className="absolute top-0 right-0 w-16 h-[120%] bg-surface/50 backdrop-blur-sm -skew-x-12 translate-x-8 z-20 border-l border-primary/30 shadow-[0_0_15px_rgba(209,86,17,0.3)]"></div>

                    <div className="absolute bottom-12 left-12 z-30">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '3rem' }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="h-1 bg-primary mb-6"
                        />
                        <h2 className="font-display text-4xl text-white leading-tight drop-shadow-lg">
                            Bienvenido <br /> <span className="text-primary">al Ritual</span>
                        </h2>
                        <p className="font-serif italic text-gray-400 mt-4 text-sm max-w-xs border-l border-white/20 pl-4">
                            "Donde la tinta se convierte en historia."
                        </p>
                    </div>
                </div>

                {/* --- DERECHA: FORMULARIO --- */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative bg-surface-dark">

                    <div className="mb-10 text-center md:text-left">
                        <h3 className="font-display text-3xl text-white mb-2">Iniciar Sesión</h3>
                        <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Accede para citas y más</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="space-y-1">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Correo</label>
                            <div className="relative group">
                                <Mail className="w-5 h-5 text-gray-600 absolute left-3 top-3 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    placeholder="usuario@dejavu.com"
                                    className="w-full bg-black/40 border border-gray-800 rounded-xl py-3 pl-10 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-serif"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Contraseña</label>
                                <a href="#" className="text-[10px] text-primary hover:text-white transition-colors">¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className="relative group">
                                <Lock className="w-5 h-5 text-gray-600 absolute left-3 top-3 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-black/40 border border-gray-800 rounded-xl py-3 pl-10 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-serif"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-primary to-orange-700 hover:from-orange-600 hover:to-primary text-white font-mono font-bold uppercase tracking-[0.2em] py-4 rounded-xl shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Ingresar"}
                        </button>

                        <div className="text-center pt-4">
                            <span className="text-gray-600 text-sm">¿Nuevo aquí? </span>
                            <Link href="/register" className="text-primary hover:text-white font-bold text-sm ml-1 transition-colors relative group">
                                Crear Cuenta
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        </div>
                    </form>
                </div>
            </motion.div>
        </main>
    );
}