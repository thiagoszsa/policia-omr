
import type { Metadata } from "next";
import "./globals.css";
import MenuCondicional from "./components/MenuCondicional";

export const metadata: Metadata = {
  title: "Polícia OMR",
    description: "Sistema institucional da Polícia OMR.",
    };

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode;
        }>) {
          return (
              <html lang="pt-BR">
                    <body>
                            <MenuCondicional />
                                    {children}
                                          </body>
                                              </html>
                                                );
                                                }
                                                