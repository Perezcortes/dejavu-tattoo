"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight,
  Scale, 
  Banknote, 
  CalendarX, 
  ShieldAlert, 
  UserCheck, 
  Copyright, 
  RefreshCw, 
  Syringe, 
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para scroll suave y cerrar menú en móvil
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste del offset para que el navbar no tape el título
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-dark text-gray-300 font-sans selection:bg-primary selection:text-white relative">
      
      {/* --- BOTÓN FLOTANTE WHATSAPP --- */}
      <a 
        href="https://wa.me/529531447499" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-black/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

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

        {/* Botón menú móvil para la tabla de contenidos */}
        <button 
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir índice"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* --- HERO HEADER --- */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-surface-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Scale className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Legal & Políticas</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight mb-4">
            Términos y <span className="text-primary">Condiciones</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base font-serif italic border-l-2 border-primary/50 pl-4">
            Última actualización: Diciembre 2025. Por favor lee atentamente antes de agendar tu sesión.
          </p>
        </div>
      </header>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row py-12 px-6 gap-12 relative">
        
        {/* SIDEBAR DE NAVEGACIÓN (Sticky en Desktop, Drawer en Móvil) */}
        <aside className={`
            fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl lg:bg-transparent lg:static lg:w-1/4 lg:block
            flex flex-col justify-center px-8 lg:px-0 transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="lg:sticky lg:top-32 space-y-6">
            <h3 className="text-white font-display text-xl border-l-4 border-primary pl-4 block lg:hidden mb-4">Índice del Documento</h3>
            <h3 className="text-white font-display text-xl border-l-4 border-primary pl-4 hidden lg:block">Índice</h3>
            
            <nav className="flex flex-col space-y-1">
              {[
                { id: 'intro', label: 'Introducción' },
                { id: 'booking', label: 'Reservas y Depósitos' },
                { id: 'cancellation', label: 'Cancelaciones' },
                { id: 'health', label: 'Salud y Seguridad' },
                { id: 'minors', label: 'Menores de Edad' },
                { id: 'care', label: 'Cuidados Posteriores' },
                { id: 'touchups', label: 'Retoques y Garantía' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-3 px-4 rounded-r-md border-l-2 transition-all text-sm font-bold tracking-wide uppercase ${
                    activeSection === item.id 
                      ? 'border-primary bg-primary/10 text-white' 
                      : 'border-white/10 text-gray-500 hover:text-gray-300 hover:border-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="p-6 bg-surface-dark rounded-xl border border-white/5 mt-8 block">
              <p className="text-white text-sm font-bold mb-2">¿Dudas?</p>
              <p className="text-xs text-gray-500 mb-4">Contáctanos directamente si algo no queda claro.</p>
              <a href="https://wa.me/529531447499" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2">
                WhatsApp Studio <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </aside>

        {/* DOCUMENTO LEGAL */}
        <main className="lg:w-3/4 space-y-16 pb-20">
          
          {/* INTRO */}
          <section id="intro" className="scroll-mt-32">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Bienvenido a <strong className="text-white">Deja Vu Body Art</strong>. Nos dedicamos a ofrecer una experiencia artística premium y segura. 
              Al agendar una cita con nosotros, aceptas cumplir con las siguientes políticas diseñadas para proteger tanto al cliente como al artista.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-primary/50 to-transparent my-8"></div>
          </section>

          {/* RESERVAS */}
          <section id="booking" className="scroll-mt-32 group">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-surface-dark border border-white/10 text-primary">
                <Banknote className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-white">Reservas y Depósitos</h2>
            </div>
            <div className="bg-surface-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 space-y-4 text-sm md:text-base">
              <p>
                Para asegurar cualquier cita, se requiere un <strong className="text-primary">depósito no reembolsable</strong>. Este monto varía según el artista y la complejidad del diseño, pero generalmente representa el 20-30% del costo estimado.
              </p>
              <ul className="space-y-3 mt-4 list-none">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>El depósito se descuenta del precio final de la sesión (o de la última sesión en proyectos grandes).</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Los diseños se muestran el día de la cita. Para cambios mayores en el diseño, se requiere aviso previo de 48 horas.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Nos reservamos el derecho de admisión si el diseño solicitado va en contra de nuestros estándares éticos o artísticos.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CANCELACIONES */}
          <section id="cancellation" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-surface-dark border border-white/10 text-primary">
                <CalendarX className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-white">Política de Cancelación</h2>
            </div>
            <div className="bg-surface-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 space-y-4 text-sm md:text-base">
              <p>
                Valoramos el tiempo de nuestros artistas. Requerimos un aviso mínimo de <strong className="text-white">48 horas</strong> para reagendar tu cita sin perder el depósito.
              </p>
              <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg mt-4">
                <p className="text-red-200 text-sm">
                  <strong className="text-red-400 block mb-1">Pérdida de Depósito:</strong>
                  Cancelaciones con menos de 48 horas de antelación, inasistencias ("No Show") o retrasos mayores a 20 minutos resultarán en la pérdida total del depósito. Se requerirá un nuevo anticipo para agendar nuevamente.
                </p>
              </div>
            </div>
          </section>

          {/* SALUD */}
          <section id="health" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-surface-dark border border-white/10 text-primary">
                <ShieldAlert className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-white">Salud y Seguridad</h2>
            </div>
            <div className="bg-surface-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 space-y-4 text-sm md:text-base">
              <p className="mb-4">
                Tu seguridad es primordial. Cumplimos con todas las normas sanitarias de COFEPRIS y utilizamos material estéril y desechable.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                  <h4 className="text-primary font-bold mb-2 uppercase text-xs tracking-widest">Restricciones Médicas</h4>
                  <p className="text-xs text-gray-400">No podemos realizar procedimientos en personas embarazadas, lactando, o bajo tratamiento con anticoagulantes sin autorización médica.</p>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                  <h4 className="text-primary font-bold mb-2 uppercase text-xs tracking-widest">Estado del Cliente</h4>
                  <p className="text-xs text-gray-400">Clientes bajo la influencia de alcohol o drogas serán rechazados inmediatamente y perderán su depósito.</p>
                </div>
              </div>
              <p className="text-xs italic text-gray-500 mt-4">
                *Es obligatorio comer bien antes de tu sesión para evitar desmayos o bajas de presión.
              </p>
            </div>
          </section>

          {/* MENORES */}
          <section id="minors" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-surface-dark border border-white/10 text-primary">
                <UserCheck className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-white">Menores de Edad</h2>
            </div>
            <div className="bg-surface-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 space-y-6 text-sm md:text-base">
              
              <div>
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Syringe className="w-4 h-4 text-primary" /> Tatuajes
                </h3>
                <p>
                  Estrictamente <strong className="text-white">solo mayores de 18 años</strong>. Es obligatorio presentar identificación oficial (INE, Pasaporte) vigente el día de la cita. Sin identificación, no hay servicio.
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-primary"></div> Perforaciones (Piercings)
                </h3>
                <p className="mb-2">
                  Realizamos perforaciones a menores de edad (15+ años) únicamente bajo las siguientes condiciones estrictas:
                </p>
                <ul className="list-disc list-inside pl-2 text-gray-400 text-sm space-y-1">
                  <li>Presencia del padre, madre o tutor legal durante todo el procedimiento.</li>
                  <li>Identificación oficial del tutor.</li>
                  <li>Acta de nacimiento del menor o documento que acredite la relación.</li>
                  <li>No realizamos perforaciones genitales ni expansiones extremas en menores.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CUIDADOS */}
          <section id="care" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-surface-dark border border-white/10 text-primary">
                <RefreshCw className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-white">Cuidados y Expansiones</h2>
            </div>
            <div className="bg-surface-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 space-y-4 text-sm md:text-base">
              <p>
                El 50% del resultado de tu tatuaje o perforación depende del cuidado en casa. Te entregaremos una guía detallada al finalizar.
              </p>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-gray-700">
                  <h4 className="text-white font-bold text-sm">Expansiones</h4>
                  <p className="text-gray-400 text-sm">
                    No realizamos expansiones drásticas en una sola sesión para evitar daños en el tejido ("blowouts"). Trabajamos con técnicas graduales y joyería de grado implante.
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-gray-700">
                  <h4 className="text-white font-bold text-sm">Garantía</h4>
                  <p className="text-gray-400 text-sm">
                    No nos hacemos responsables por infecciones o malas cicatrizaciones derivadas de negligencia (nadar en albercas, exposición al sol, tocar con manos sucias) durante el proceso de curación.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RETOQUES */}
          <section id="touchups" className="scroll-mt-32">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 rounded-full bg-surface-dark border border-white/10 text-primary">
                <Copyright className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-display text-white">Retoques y Propiedad Intelectual</h2>
            </div>
            <div className="bg-surface-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 text-sm md:text-base">
              <p className="mb-4">
                Ofrecemos <strong className="text-white">un retoque de cortesía</strong> dentro de los primeros 3 meses, siempre que se hayan seguido las instrucciones de cuidado.
              </p>
              <p className="text-xs text-gray-500">
                *Retoques en zonas de alto desgaste (manos, pies, dedos, interior del labio) no tienen garantía y se cobrarán como sesión mínima.
              </p>
              <p className="mt-6 pt-6 border-t border-white/5 text-gray-400">
                Todos los diseños originales creados por Deja Vu Body Art son propiedad intelectual del artista. Nos reservamos el derecho de publicar fotografías del trabajo realizado en nuestras redes sociales.
              </p>
            </div>
          </section>

          {/* CTA FINAL */}
          <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-primary/20 to-transparent border border-primary/30 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-primary text-black rounded-full">
              <CheckCircle className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-2">¿Listo para proceder?</h4>
              <p className="text-sm text-gray-300">Al agendar tu cita, confirmas que has leído, entendido y aceptado todos los términos aquí descritos.</p>
            </div>
            <Link href="/#booking" className="whitespace-nowrap px-8 py-3 bg-primary hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded-sm transition-all duration-300">
              Acepto y Agendo
            </Link>
          </div>

        </main>
      </div>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="bg-black border-t border-white/10 py-10 text-center">
        <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">© 2025 Deja Vu Body Art. Huajuapan de León, Oax.</p>
      </footer>

    </main>
  );
}