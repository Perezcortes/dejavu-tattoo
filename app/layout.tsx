import type { Metadata } from "next";
// Importamos las fuentes desde Google
import { Cinzel_Decorative, Playfair_Display, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Configuración de Cinzel (Títulos góticos)
const cinzel = Cinzel_Decorative({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel", // Esta variable se usa en tailwind.config
  display: "swap",
});

// Configuración de Playfair (Textos elegantes)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Configuración de Roboto Mono (Detalles técnicos)
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deja Vu Body Art",
  description: "Premium Custom Tattoos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth dark">
      {/* Aplicamos las variables de fuente al BODY entero */}
      <body className={`${cinzel.variable} ${playfair.variable} ${roboto.variable} font-serif bg-dark text-gray-200 antialiased selection:bg-primary selection:text-black`}>
        {children}
      </body>
    </html>
  );
}