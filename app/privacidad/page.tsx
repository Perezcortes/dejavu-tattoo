"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Server, 
  Share2, 
  Cookie, 
  Mail, 
  Menu, 
  X,
  ArrowRight,
  UserCheck,
  Phone,
  Banknote
} from 'lucide-react';

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para scroll suave
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste del offset
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-dark text-gray-300 font-sans selection:bg-primary selection:text-white">
      
      {/* --- NAVBAR SIMPLIFICADO --- */}
      <nav className="fixed w-full z-50 bg-dark/95 backdrop-blur-md border-b border-white/5 h-20 flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3 group">
          <ArrowLeft className="text-primary group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold tracking-widest uppercase text-white hidden sm:block">Inicio</span>
          <span className="text-sm font-bold tracking-widest uppercase text-white sm:hidden">Atrás</span>
        </Link>
        
        <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto opacity-80" />
            <span className="font-display font-bold text-xl text-white hidden md:block">DEJA VU</span>
        </div>

        {/* Botón menú móvil */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* --- HERO HEADER --- */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-surface-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 70% 20%, #D15611 0%, transparent 60%)' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-xs font-bold uppercase tracking-widest">Legal & Cumplimiento</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight mb-6">
            Aviso de <span className="text-primary">Privacidad</span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl text-lg font-serif italic">
            La transparencia es la base de nuestro arte. Conoce cómo protegemos tu información personal y médica con el mismo cuidado que aplicamos en cada tatuaje.
          </p>
          <p className="text-gray-600 text-xs font-mono mt-4 uppercase tracking-widest">Última actualización: Diciembre 2025</p>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row py-12 px-6 gap-12 relative">
        
        {/* SIDEBAR DE NAVEGACIÓN (Sticky Desktop / Drawer Mobile) */}
        <aside className={`
            fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl lg:bg-transparent lg:static lg:w-1/4 lg:block
            flex flex-col justify-center px-8 lg:px-0 transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="lg:sticky lg:top-32 space-y-6">
            <h3 className="text-white font-display text-xl border-l-4 border-primary pl-4 block lg:hidden mb-4">Índice</h3>
            <h3 className="text-white font-display text-xl border-l-4 border-primary pl-4 hidden lg:block">Contenido</h3>
            
            <nav className="flex flex-col space-y-2">
              {[
                { id: 'intro', label: 'Introducción' },
                { id: 'collection', label: '1. Qué Recopilamos' },
                { id: 'usage', label: '2. Uso de Datos' },
                { id: 'sharing', label: '3. Compartir Info' },
                { id: 'security', label: '4. Seguridad' },
                { id: 'cookies', label: '5. Cookies' },
                { id: 'contact', label: 'Contacto' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 px-4 rounded-lg transition-all text-sm font-medium border border-transparent ${
                    activeSection === item.id 
                      ? 'bg-primary/20 text-white border-primary/30' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="p-6 bg-gradient-to-br from-surface-dark to-black rounded-xl border border-white/5 mt-8 block">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-white font-bold text-sm mb-2 text-center">¿Tienes dudas?</h4>
              <p className="text-xs text-gray-500 mb-4 text-center">Nuestro equipo legal está disponible para resolver cualquier inquietud.</p>
              <div className="text-center">
                <a href="mailto:privacidad@dejavubodyart.com" className="inline-block px-4 py-2 bg-white/5 hover:bg-primary hover:text-white rounded text-xs font-bold transition-colors uppercase tracking-wider text-gray-400">
                  Contactar Soporte
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* DOCUMENTO LEGAL */}
        <main className="lg:w-3/4 space-y-20 pb-20">
          
          {/* INTRODUCCIÓN */}
          <section id="intro" className="scroll-mt-32">
            <div className="p-8 rounded-2xl bg-surface-dark border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <ShieldCheck className="w-32 h-32" />
              </div>
              <h2 className="text-2xl font-bold text-white font-display mb-4">Introducción</h2>
              <p className="text-base leading-relaxed mb-4">
                En <strong className="text-white">Deja Vu Body Art</strong>, consideramos sagrada la confianza entre artista y cliente. Este aviso describe cómo protegemos la información personal y de salud que compartes con nosotros durante tu experiencia en el estudio.
              </p>
              <p className="text-base leading-relaxed">
                Al utilizar nuestro sitio web o visitar nuestro estudio, aceptas los términos descritos en este Aviso de Privacidad.
              </p>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent my-12 opacity-50"></div>
          </section>

          {/* 1. RECOPILACIÓN */}
          <section id="collection" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4 font-display">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary text-lg">1</span>
              Información que Recopilamos
            </h2>
            <p className="mb-6 text-gray-400">Recopilamos información que nos proporcionas directamente al reservar una cita, llenar un formulario de consentimiento o comunicarte con nosotros.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-dark p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-lg text-primary group-hover:text-white transition-colors">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Identidad Personal</h4>
                    <p className="text-sm text-gray-500">Nombre completo, fecha de nacimiento e identificación oficial (INE/Pasaporte) para verificación de edad.</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-dark p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-lg text-primary group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Datos de Contacto</h4>
                    <p className="text-sm text-gray-500">Correo electrónico, número de teléfono y dirección (si aplica para envíos).</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-dark p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-lg text-primary group-hover:text-white transition-colors">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Información de Salud</h4>
                    <p className="text-sm text-gray-500">Historial médico relevante, alergias y condiciones de la piel para garantizar tu seguridad.</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface-dark p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-black rounded-lg text-primary group-hover:text-white transition-colors">
                    <Banknote className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Datos de Pago</h4>
                    <p className="text-sm text-gray-500">Historial de transacciones y detalles de pago (procesados de forma segura por terceros).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. USO DE DATOS */}
          <section id="usage" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4 font-display">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary text-lg">2</span>
              Cómo Usamos tus Datos
            </h2>
            <div className="bg-surface-dark p-8 rounded-2xl border-l-4 border-primary">
              <p className="mb-6 text-gray-300">Tu información nos permite brindar servicios artísticos seguros y de alta calidad. Específicamente, utilizamos tus datos para:</p>
              <ul className="space-y-4">
                {[
                  "Procesar tus reservas de citas y gestionar nuestra agenda.",
                  "Garantizar la seguridad del procedimiento revisando el historial médico relevante.",
                  "Comunicarnos sobre recordatorios de citas, instrucciones de cuidado posterior y actualizaciones del estudio.",
                  "Cumplir con las regulaciones de COFEPRIS y obligaciones legales locales."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-400">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. COMPARTIR & 4. SEGURIDAD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section id="sharing" className="scroll-mt-32 bg-black/40 p-8 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Share2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold font-display">3. Compartir Información</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                No vendemos, intercambiamos ni alquilamos tu información personal a terceros. Podemos compartir información demográfica agregada genérica no vinculada a ninguna información de identificación personal con nuestros socios comerciales y afiliados de confianza.
              </p>
            </section>

            <section id="security" className="scroll-mt-32 bg-black/40 p-8 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 mb-4 text-white">
                <Server className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold font-display">4. Seguridad de Datos</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Adoptamos prácticas adecuadas de recopilación, almacenamiento y procesamiento de datos, así como medidas de seguridad para proteger contra el acceso no autorizado, alteración, divulgación o destrucción de tu información personal.
              </p>
            </section>
          </div>

          {/* 5. COOKIES */}
          <section id="cookies" className="scroll-mt-32">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4 font-display">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary text-lg">5</span>
              Cookies y Tecnologías
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Como la mayoría de los sitios web modernos, Deja Vu Body Art utiliza cookies para mejorar tu experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en tu dispositivo que nos ayudan a recordar tus preferencias.
                </p>
                <p className="text-gray-400 text-sm">
                  Puedes controlar el uso de cookies a nivel individual en tu navegador. Si rechazas las cookies, podrás seguir usando nuestro sitio, pero algunas funciones podrían verse limitadas.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Cookie className="w-32 h-32 text-primary/20 animate-pulse-slow" />
              </div>
            </div>
          </section>

          <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent my-12 opacity-50"></div>

          {/* CONTACTO (FIXED OVERFLOW) */}
          <section id="contact" className="scroll-mt-32">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-orange-900 p-6 md:p-12 text-white text-center">
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">¿Preguntas sobre tu privacidad?</h2>
                <p className="max-w-2xl mx-auto mb-8 opacity-90 text-sm md:text-base">
                  Si tienes alguna pregunta sobre este Aviso de Privacidad, las prácticas de este sitio o tus tratos con nosotros, por favor contáctanos.
                </p>
                
                {/* --- BOTÓN DE CONTACTO CORREGIDO PARA MÓVIL --- */}
                <a 
                  href="mailto:privacidad@dejavubodyart.com" 
                  className="
                    inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 
                    bg-white text-primary 
                    px-6 py-3 sm:px-8 
                    rounded-full font-bold 
                    hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105
                    max-w-full
                  "
                >
                  <Mail className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-base break-all sm:break-normal">
                    privacidad@dejavubodyart.com
                  </span>
                </a>
                
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-black border-t border-white/10 py-10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-6 w-auto grayscale opacity-50" />
            <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">© 2025 Deja Vu Body Art.</span>
          </div>
          <div className="flex gap-6 text-xs text-gray-500 font-bold uppercase tracking-wider">
            <Link href="/terms" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="/privacy" className="text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}