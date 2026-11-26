
"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { nome: "Painel inicial", caminho: "/painel" },
    { nome: "Meu perfil", caminho: "/perfil" },
      { nome: "Requerimentos", caminho: "/requerimentos" },
        { nome: "Documentos", caminho: "/documentos" },
          { nome: "Aulas e instruções", caminho: "/aulas" },
            { nome: "Comunicados", caminho: "/comunicados" },
              { nome: "Painel DRH", caminho: "/drh" },
                { nome: "Setor de Inteligência", caminho: "/si" },
                  { nome: "Painel administrativo", caminho: "/acs" },
                  ];

                  export default function Menu() {
                    const [aberto, setAberto] = useState(false);

                      return (
                          <>
                                <button
                                        className="menuToggle"
                                                onClick={() => setAberto(!aberto)}
                                                        aria-label="Abrir menu"
                                                              >
                                                                      ☰
                                                                            </button>

                                                                                  {aberto && (
                                                                                          <div
                                                                                                    className="menuOverlay"
                                                                                                              onClick={() => setAberto(false)}
                                                                                                                      />
                                                                                                                            )}

                                                                                                                                  <aside className={`sideMenu ${aberto ? "sideMenuOpen" : ""}`}>
                                                                                                                                          <div className="sideMenuHeader">
                                                                                                                                                    <strong>POLÍCIA OMR</strong>
                                                                                                                                                              <button onClick={() => setAberto(false)} aria-label="Fechar menu">
                                                                                                                                                                          ×
                                                                                                                                                                                    </button>
                                                                                                                                                                                            </div>

                                                                                                                                                                                                    <nav>
                                                                                                                                                                                                              {links.map((link) => (
                                                                                                                                                                                                                          <Link
                                                                                                                                                                                                                                        href={link.caminho}
                                                                                                                                                                                                                                                      key={link.caminho}
                                                                                                                                                                                                                                                                    onClick={() => setAberto(false)}
                                                                                                                                                                                                                                                                                >
                                                                                                                                                                                                                                                                                              {link.nome}
                                                                                                                                                                                                                                                                                                          </Link>
                                                                                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                                                                                            </nav>
                                                                                                                                                                                                                                                                                                                                  </aside>
                                                                                                                                                                                                                                                                                                                                      </>
                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                        