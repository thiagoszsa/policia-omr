
import Link from "next/link";

export default function Comunicados() {
  return (
      <main className="page">
            <header className="pageHeader">
                    <Link href="/painel" className="backLink">
                              ← Voltar ao painel
                                      </Link>

                                              <p className="eyebrow">POLÍCIA OMR</p>
                                                      <h1>Comunicados oficiais</h1>
                                                              <p>
                                                                        Acompanhe os avisos, as determinações e as publicações
                                                                                  institucionais da Polícia OMR.
                                                                                          </p>
                                                                                                </header>

                                                                                                      <section className="card">
                                                                                                              <div className="sectionHeader">
                                                                                                                        <h2>Mural institucional</h2>
                                                                                                                                  <span className="muted">Publicações oficiais</span>
                                                                                                                                          </div>

                                                                                                                                                  <div className="emptyState">
                                                                                                                                                            <h3>Nenhum comunicado publicado</h3>
                                                                                                                                                                      <p>
                                                                                                                                                                                  Os comunicados oficiais aparecerão aqui assim que forem
                                                                                                                                                                                              publicados pela administração ou pelos setores autorizados.
                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                      </section>

                                                                                                                                                                                                                            <section className="card">
                                                                                                                                                                                                                                    <h2>Sobre as publicações</h2>
                                                                                                                                                                                                                                            <p>
                                                                                                                                                                                                                                                      A publicação e o gerenciamento de comunicados serão
                                                                                                                                                                                                                                                                restritos aos membros autorizados da OMR.
                                                                                                                                                                                                                                                                        </p>
                                                                                                                                                                                                                                                                              </section>
                                                                                                                                                                                                                                                                                  </main>
                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                    