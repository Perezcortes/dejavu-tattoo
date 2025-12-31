"use client";

import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Droplets, 
  Syringe, 
  Sparkles, 
  Image as ImageIcon, 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronDown,
  User // Nuevo icono importado
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative z-10 bg-dark min-h-screen text-gray-200 selection:bg-primary selection:text-white overflow-x-hidden">
      
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

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-dark/90 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo y Nombre */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <img 
                src="/logo.png" 
                alt="Deja Vu Logo" 
                className="h-16 md:h-20 w-auto object-contain filter drop-shadow-[0_0_5px_rgba(209,86,17,0.5)]" 
              />
              <span className="font-display font-bold text-2xl md:text-3xl text-primary tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-light to-primary drop-shadow-sm hidden sm:block">
                Deja Vu
              </span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a className="text-sm font-mono tracking-widest uppercase hover:text-primary transition-colors duration-300 relative group" href="#gallery">
                  Trabajos
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="text-sm font-mono tracking-widest uppercase hover:text-primary transition-colors duration-300 relative group" href="#supplies">
                  Suministros
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="text-sm font-mono tracking-widest uppercase hover:text-primary transition-colors duration-300 relative group" href="#apparel">
                  Ropa
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Botón Agendar Cita */}
                <a className="px-6 py-2 border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 font-mono text-xs font-bold uppercase tracking-[0.2em] rounded-sm" href="#booking">
                  Agendar
                </a>

                {/* BOTÓN ACCEDE MEJORADO (Desktop) */}
                <a 
                  href="/login" 
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-primary to-orange-700 text-white font-mono text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(209,86,17,0.6)] hover:-translate-y-0.5 transition-all duration-300 rounded-sm"
                >
                  <User className="w-4 h-4" />
                  <span>Acceder</span>
                </a>
              </div>
            </div>

            {/* Botón Hamburguesa Móvil */}
            <div className="-mr-2 flex md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Desplegable Móvil */}
        <div className={`md:hidden absolute top-24 left-0 w-full bg-dark/95 border-b border-primary/20 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pt-4 pb-8 space-y-4 flex flex-col text-center">
            <a onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-primary block py-3 font-mono uppercase tracking-widest text-sm border-b border-white/5" href="#gallery">Trabajos</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-primary block py-3 font-mono uppercase tracking-widest text-sm border-b border-white/5" href="#supplies">Suministros</a>
            <a onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-primary block py-3 font-mono uppercase tracking-widest text-sm border-b border-white/5" href="#apparel">Ropa</a>
            
            <div className="flex flex-col gap-3 mt-4">
              <a onClick={() => setIsMenuOpen(false)} className="border border-primary text-primary block py-3 font-mono font-bold uppercase tracking-widest text-sm rounded-sm" href="#booking">
                Agendar Cita
              </a>
              {/* BOTÓN ACCEDE (Móvil) */}
              <a onClick={() => setIsMenuOpen(false)} className="bg-primary text-white block py-3 font-mono font-bold uppercase tracking-widest text-sm rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20" href="/login">
                <User className="w-4 h-4" />
                Acceder
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] min-h-[600px] flex flex-col items-center justify-start pt-40 md:pt-72 overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <img 
            alt="Andres Villagomez Tatuando" 
            className="w-full h-full object-cover object-center opacity-100" 
            src="/fondo.jpeg" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_#050505_100%)]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
          <div className="mb-6 md:mb-8 opacity-90 drop-shadow-[0_0_15px_rgba(209,86,17,0.3)]">
             <h2 className="text-xl md:text-2xl font-mono text-primary tracking-[0.5em] uppercase border-b border-primary/50 pb-2">Body Art</h2>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 tracking-wide leading-tight drop-shadow-2xl">
            Maestría <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">Eterna</span>
          </h1>
          
          <p className="mt-2 md:mt-4 max-w-2xl mx-auto text-lg md:text-2xl text-gray-300 font-serif italic mb-10 md:mb-12 border-l-2 border-primary/50 pl-6 text-left leading-relaxed">
            "Donde el arte encuentra la permanencia. Estudio dirigido por <span className="text-primary not-italic font-bold">Andres Villagomez</span>."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full px-6">
            <a className="w-full sm:w-auto group relative px-10 py-4 bg-transparent overflow-hidden rounded-none min-w-[200px] border border-primary/30" href="#booking">
              <div className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full opacity-100"></div>
              <span className="relative text-primary group-hover:text-white text-sm font-mono font-bold uppercase tracking-[0.25em] transition-colors duration-200">Cotización</span>
            </a>
            <a className="w-full sm:w-auto text-gray-400 hover:text-white text-sm font-mono uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-primary pb-1" href="#gallery">
              Ver Portafolio
            </a>
          </div>
        </div>
        
        {/* Flecha de scroll */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce duration-1000">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary/70 mb-2">Scroll</span>
          <ChevronDown className="text-primary/70 w-6 h-6" />
        </div>
      </header>

      {/* --- GALERÍA --- */}
      <section className="py-20 md:py-32 bg-dark relative" id="gallery">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-white/10 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Obras Recientes</h2>
              <p className="text-primary font-mono text-sm tracking-widest uppercase">Fresco de la aguja</p>
            </div>
            <div className="hidden md:block">
              <a className="text-white hover:text-primary transition-colors font-serif italic text-lg flex items-center gap-2" href="#">
                Ver Archivo Completo <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Tatuaje 1: IT (Payaso) */}
            <div className="group relative cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-surface border border-white/5 relative">
                <div className="absolute inset-0 z-10 border border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none m-2"></div>
                <img 
                  alt="Tatuaje IT Pennywise" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" 
                  src="/tattoo1.jpeg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-primary text-xs font-mono uppercase tracking-widest mb-2">Realismo / Horror</span>
                  <h3 className="text-white font-display text-2xl tracking-wide">IT & Georgie</h3>
                </div>
              </div>
            </div>

            {/* Tatuaje 2: Samurai */}
            <div className="group relative cursor-pointer lg:mt-16">
              <div className="aspect-[3/4] overflow-hidden bg-surface border border-white/5 relative">
                <div className="absolute inset-0 z-10 border border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none m-2"></div>
                <img 
                  alt="Tatuaje Samurai" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" 
                  src="/tattoo2.jpeg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-primary text-xs font-mono uppercase tracking-widest mb-2">Oriental</span>
                  <h3 className="text-white font-display text-2xl tracking-wide">El Samurai</h3>
                </div>
              </div>
            </div>

            {/* Tatuaje 3: Diosa Azteca */}
            <div className="group relative cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-surface border border-white/5 relative">
                <div className="absolute inset-0 z-10 border border-primary/0 group-hover:border-primary/50 transition-all duration-500 pointer-events-none m-2"></div>
                <img 
                  alt="Tatuaje Diosa Azteca" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" 
                  src="/tattoo3.jpeg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block text-primary text-xs font-mono uppercase tracking-widest mb-2">Prehispánico</span>
                  <h3 className="text-white font-display text-2xl tracking-wide">Diosa Azteca</h3>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-12 text-center md:hidden">
            <a className="inline-block border border-white/20 text-white px-8 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="#">Ver todo el Portafolio</a>
          </div>
        </div>
      </section>

      {/* --- SUMINISTROS --- */}
      <section className="py-20 md:py-32 bg-surface relative overflow-hidden" id="supplies">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary"></div>
                <span className="text-primary font-mono text-xs font-bold tracking-[0.2em] uppercase">Inventario y Suministros</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                Material de Grado <br/> <span className="italic font-serif text-primary-light font-normal">Profesional</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg font-serif leading-relaxed border-l-2 border-white/10 pl-6">
                Deja Vu no es solo un estudio; es un santuario para el oficio. Curamos tintas de primer nivel, agujas de precisión y productos de cuidado posterior en los que confían los mejores artistas.
              </p>
              <div className="space-y-6 mb-12">
                <div className="flex items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-dark text-primary group-hover:border-primary transition-colors">
                    <Droplets className="w-5 h-5" />
                  </span>
                  <span className="ml-4 text-gray-300 font-mono text-sm uppercase tracking-wide">Pigmentos Veganos</span>
                </div>
                <div className="flex items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-dark text-primary group-hover:border-primary transition-colors">
                    <Syringe className="w-5 h-5" />
                  </span>
                  <span className="ml-4 text-gray-300 font-mono text-sm uppercase tracking-wide">Esterilización Médica</span>
                </div>
                <div className="flex items-center group">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-dark text-primary group-hover:border-primary transition-colors">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <span className="ml-4 text-gray-300 font-mono text-sm uppercase tracking-wide">Bálsamos "Deja Vu"</span>
                </div>
              </div>
              <a className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors border-b border-white hover:border-primary pb-1 font-mono text-xs font-bold uppercase tracking-[0.2em]" href="#">
                Acceder a la Tienda <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-1 border border-primary/20 rounded-sm translate-x-4 translate-y-4 pointer-events-none"></div>
              <div className="relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <img alt="Suministros Tatuaje" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" src="/suministro.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ROPA / APPAREL --- */}
      <section className="py-20 md:py-32 bg-dark border-t border-white/5" id="apparel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase block mb-4">Viste el Arte</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Deja Vu Apparel</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Ropa 1 */}
            <div className="group">
              <div className="aspect-square bg-surface w-full overflow-hidden relative border border-white/5 group-hover:border-primary/30 transition-colors">
                <img alt="Camiseta Negra" className="object-cover object-center w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold font-mono px-2 py-1 uppercase tracking-wider">Nuevo</span>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg text-white font-display tracking-wide group-hover:text-primary transition-colors">Camiseta Signature</h3>
                <p className="mt-1 text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Negro / Estampado Óxido</p>
                <p className="text-sm font-serif italic text-primary-light">$350.00 MXN</p>
              </div>
            </div>

            {/* Ropa 2 */}
            <div className="group">
              <div className="aspect-square bg-surface w-full overflow-hidden relative border border-white/5 group-hover:border-primary/30 transition-colors">
                <img alt="Sudadera Gótica" className="object-cover object-center w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg text-white font-display tracking-wide group-hover:text-primary transition-colors">Sudadera Gótica</h3>
                <p className="mt-1 text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Algodón Pesado</p>
                <p className="text-sm font-serif italic text-primary-light">$650.00 MXN</p>
              </div>
            </div>

            {/* Ropa 3 */}
            <div className="group">
              <div className="aspect-square bg-surface w-full overflow-hidden relative border border-white/5 group-hover:border-primary/30 transition-colors">
                <img alt="Gorra Snapback" className="object-cover object-center w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg text-white font-display tracking-wide group-hover:text-primary transition-colors">Script Snapback</h3>
                <p className="mt-1 text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Bordado</p>
                <p className="text-sm font-serif italic text-primary-light">$300.00 MXN</p>
              </div>
            </div>

            {/* Ropa 4 */}
            <div className="group">
              <div className="aspect-square bg-surface w-full overflow-hidden relative border border-white/5 group-hover:border-primary/30 transition-colors flex items-center justify-center bg-gradient-to-br from-surface to-black">
                <ImageIcon className="text-gray-700 w-16 h-16 group-hover:text-primary transition-colors duration-500" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg text-white font-display tracking-wide group-hover:text-primary transition-colors">Prints Limitados</h3>
                <p className="mt-1 text-xs text-gray-500 font-mono uppercase tracking-widest mb-2">Papel Archivo</p>
                <p className="text-sm font-serif italic text-primary-light">Desde $450.00 MXN</p>
              </div>
            </div>

          </div>
          <div className="mt-16 text-center">
            <a className="inline-block px-10 py-4 border border-white/20 hover:border-primary text-white hover:text-primary transition-all duration-300 font-mono text-xs font-bold uppercase tracking-[0.2em]" href="#">Ver Colección Completa</a>
          </div>
        </div>
      </section>

      {/* --- BOOKING / CONTACTO --- */}
      <section className="relative py-20 md:py-32 bg-secondary overflow-hidden" id="booking">
        {/* Fondo sutil */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1590246294307-a372199b007d?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 text-left">
              <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6 leading-none">¿Listo para <br/><span className="text-primary">Tatuarte?</span></h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-gray-400 text-lg font-serif italic mb-8 max-w-md">
                Las consultas son gratuitas. Agenda abierta para la próxima temporada con Andres Villagomez.
              </p>
              <div className="flex gap-8 text-sm font-mono text-gray-500 uppercase tracking-widest">
                <div>
                  <span className="block text-white mb-1">Lista de Espera</span>
                  2-3 Semanas
                </div>
                <div>
                  <span className="block text-white mb-1">Anticipo</span>
                  Requerido
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-dark/80 backdrop-blur-md p-6 md:p-10 border border-primary/30 shadow-2xl relative">
                {/* Esquinas decorativas */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary"></div>
                
                <h3 className="text-2xl font-display text-white mb-8 text-center">Solicitar Cita</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2" htmlFor="email">Correo Electrónico</label>
                    <input className="w-full bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 font-serif outline-none transition-all" id="email" placeholder="tu@email.com" type="email" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-primary uppercase tracking-widest mb-2" htmlFor="idea">Idea del Tatuaje</label>
                    <textarea className="w-full bg-black/50 border border-white/10 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary py-3 px-4 font-serif outline-none transition-all" id="idea" placeholder="Describe la zona, tamaño aproximado y estilo..." rows={4}></textarea>
                  </div>
                  <button className="w-full bg-primary hover:bg-white text-black font-mono font-bold uppercase tracking-[0.2em] py-4 transition-colors duration-300" type="button">
                    Enviar Solicitud
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <span className="font-display font-bold text-2xl text-white tracking-widest uppercase">Deja Vu</span>
              <p className="mt-6 text-gray-500 text-sm leading-relaxed font-serif italic">
                Elevando la modificación corporal a bellas artes. Un entorno estéril y lujoso para tu expresión eterna.
              </p>
              <div className="flex space-x-6 mt-8">
                <a className="text-gray-500 hover:text-primary transition-colors" href="https://www.instagram.com/andres_dresan?igsh=MWd1ejdqOW5oeTV1eQ==">
                  <Instagram className="w-5 h-5" />
                </a>
                <a className="text-gray-500 hover:text-primary transition-colors" href="https://www.facebook.com/share/15h4Lz3Dzw/">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary mb-6">Navegación</h3>
              <ul className="space-y-4">
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#gallery">Portafolio</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#supplies">Inventario</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#apparel">Ropa</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#booking">Citas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary mb-6">Estudio</h3>
              <ul className="space-y-4">
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Artistas Residentes</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Guest Spots</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Guía de Cuidados</a></li>
                <li><a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary mb-6">Visítanos</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin className="text-primary mr-3 w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Reforma 2, Centro, 69000<br/>Huajuapan de León, Oax.</span>
                </li>
                <li className="flex items-start">
                  <Clock className="text-primary mr-3 w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="block">Lun-Sáb: 9am - 9pm</span>
                    <span className="block">Dom: 12pm - 8pm</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-primary mr-3 w-4 h-4 mt-1 flex-shrink-0" />
                  <span>953 110 2430</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[10px] text-gray-600 font-mono uppercase tracking-widest mb-4 md:mb-0">
              © 2025 Deja Vu Body Art. Todos los derechos reservados.
            </div>
            <div className="flex space-x-8">
              <a className="text-[10px] text-gray-600 hover:text-gray-400 font-mono uppercase tracking-widest" href="/privacidad">Privacidad</a>
              <a className="text-[10px] text-gray-600 hover:text-gray-400 font-mono uppercase tracking-widest" href="/terminos">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}