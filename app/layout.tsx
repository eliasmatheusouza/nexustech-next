import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Nexus Tech | Assistência Técnica Especializada & Soluções em TI",
  description:
    "Assistência técnica especializada em computadores, notebooks, impressoras, redes e suporte corporativo de TI. Atendimento ágil, diagnóstico transparente e garantia comprovada.",
  keywords: [
    "assistência técnica informática",
    "manutenção de computadores",
    "conserto de notebook",
    "manutenção de impressoras",
    "formatação de computadores",
    "upgrade de hardware",
    "redes de computadores",
    "suporte empresarial TI",
    "Nexus Tech"
  ],
  authors: [{ name: "Nexus Tech" }],
  openGraph: {
    title: "Nexus Tech | Manutenção de Computadores, Notebooks e Impressoras",
    description:
      "Assistência técnica de alto padrão com diagnóstico transparente, infraestrutura moderna e suporte dedicado para você e sua empresa.",
    type: "website",
    locale: "pt_BR",
    url: "https://nexustech.com.br"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ComputerStore", "ProfessionalService"],
      "@id": "https://nexustech.com.br/#business",
      "name": "Nexus Tech",
      "url": "https://nexustech.com.br",
      "telephone": "+5511999998888",
      "email": "contato@nexustech.com.br",
      "foundingDate": "2015",
      "priceRange": "$$",
      "description":
        "Assistência técnica especializada e consultoria em infraestrutura de TI para clientes residenciais e empresas.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Paulista, 1000",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01310-100",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -23.561492,
        "longitude": -46.655881
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "18:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/nexustech",
        "https://www.linkedin.com/company/nexustech",
        "https://github.com/nexustech"
      ]
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
