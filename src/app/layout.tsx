import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Kumar | Java Architect",
  description:
    "Portfolio of Ram Kumar — Java Architect with 13+ years building enterprise microservices, Spring Boot backends, and cloud-native systems.",
  keywords: [
    "Java Architect",
    "Spring Boot",
    "Microservices",
    "AWS",
    "Backend Developer",
    "Ram Kumar",
  ],
  authors: [{ name: "Ram Kumar" }],
  openGraph: {
    title: "Ram Kumar | Java Architect",
    description:
      "Enterprise backend architect specializing in Java, Spring Boot, and cloud-native microservices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#030712] font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
