
"use client";

import { useState } from "react";

export default function Home() {
  const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");

      return (
          <main className="page">
                <section className="brand">
                        <div className="logoMark">OMR</div>
                                <p className="eyebrow">SISTEMA INSTITUCIONAL</p>
                                        <h1>POLÍCIA <span>OMR</span></h1>
                                                <p className="motto">Disciplina • Lealdade • Boa convivência</p>
                                                      </section>

                                                            <section className="panel">
                                                                    <div className="panelHead">
                                                                              <p className="eyebrow">ÁREA RESTRITA</p>
                                                                                        <h2>Acesso ao sistema</h2>
                                                                                                  <p>Entre com suas credenciais institucionais.</p>
                                                                                                          </div>

                                                                                                                  <form onSubmit={(event) => event.preventDefault()}>
                                                                                                                            <label htmlFor="nickname">Nick do Habbo</label>
                                                                                                                                      <input
                                                                                                                                                  id="nickname"
                                                                                                                                                              value={nickname}
                                                                                                                                                                          onChange={(event) => setNickname(event.target.value)}
                                                                                                                                                                                      placeholder="Digite seu nick"
                                                                                                                                                                                                  required
                                                                                                                                                                                                            />

                                                                                                                                                                                                                      <label htmlFor="password">Senha</label>
                                                                                                                                                                                                                                <input
                                                                                                                                                                                                                                            id="password"
                                                                                                                                                                                                                                                        type="password"
                                                                                                                                                                                                                                                                    value={password}
                                                                                                                                                                                                                                                                                onChange={(event) => setPassword(event.target.value)}
                                                                                                                                                                                                                                                                                            placeholder="Digite sua senha"
                                                                                                                                                                                                                                                                                                        required
                                                                                                                                                                                                                                                                                                                  />

                                                                                                                                                                                                                                                                                                                            <button type="submit">ENTRAR</button>
                                                                                                                                                                                                                                                                                                                                    </form>

                                                                                                                                                                                                                                                                                                                                            <div className="registerNote">
                                                                                                                                                                                                                                                                                                                                                      <strong>Primeiro acesso?</strong>
                                                                                                                                                                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                                                                                                                                                                            O cadastro será liberado após a aprovação institucional
                                                                                                                                                                                                                                                                                                                                                                                        e a verificação do Habbo.
                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                </section>

                                                                                                                                                                                                                                                                                                                                                                                                                      <footer>POLÍCIA OMR · SISTEMA DE GESTÃO INSTITUCIONAL</footer>
                                                                                                                                                                                                                                                                                                                                                                                                                          </main>
                                                                                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                                                            