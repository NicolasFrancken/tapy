import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "./client/libs/utils";
import { Toaster } from "./client/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TAPY.AI | Optimización de Amazon con AI",
    template: `%s - TAPY.AI | Optimización de Amazon con AI`,
  },
  description:
    "Revoluciona tu negocio en Amazon con TAPY, el asistente integral que perfecciona tus negociaciones, listings y publicidad. Simple. Eficiente. Efectivo.",
  icons: {
    icon: "/logos/favicon.ico",
    shortcut: "/logos/favicon-16x16.png",
    apple: "/logos/apple-touch-icon.png",
  },
  keywords: [
    "Amazon",
    "Ventas",
    "Vendedor",
    "Seller",
    "E-commerce",
    "IA",
    "Marketplace",
    "Listado de productos",
    "Optimización de listados",
    "Análisis de competencia",
    "Gestión de inventario",
    "Precios dinámicos",
    "Servicio al cliente automatizado",
    "Detección de tendencias",
    "Optimización de publicidad",
    "Análisis de comentarios y revisiones",
    "Segmentación de clientes",
    "Predicción de ventas",
    "Ranking de productos",
    "Keyword research",
    "Fulfillment",
    "Logística",
    "Envío",
    "Feedback del cliente",
    "Reputación del vendedor",
    "Marketing en Amazon",
    "Campañas publicitarias",
    "Conversiones",
    "Gestión de cuentas",
    "Informe de rendimiento",
    "Comportamiento del comprador",
    "Políticas de Amazon",
    "Reembolsos",
    "Gestión de reclamaciones",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn("antialiased", outfit.className)}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
