
import Link from "next/link";

const documentos = [
  {
      sigla: "RGM",
          nome: "Regulamento Geral Militar",
              descricao:
                    "Reúne as normas gerais, princípios, deveres e disposições aplicáveis aos integrantes da Polícia OMR.",
                      },
                        {
                            sigla: "RDM",
                                nome: "Regulamento Disciplinar Militar",
                                    descricao:
                                          "Estabelece as transgressões disciplinares, penalidades e procedimentos administrativos.",
                                            },
                                              {
                                                  sigla: "IDI",
                                                      nome: "Instrução e Diretrizes Institucionais",
                                                          descricao:
                                                                "Apresenta orientações, procedimentos e diretrizes complementares da instituição.",
                                                                  },
                                                                  ];

                                                                  export default function Documentos() {
                                                                    return (
                                                                        <main className="page">
                                                                              <header className="pageHeader">
                                                                                      <Link href="/painel" className="backLink">
                                                                                                ← Voltar ao painel
                                                                                                        </Link>
                                                                                                                <p className="eyebrow">POLÍCIA OMR</p>
                                                                                                                        <h1>Documentos institucionais</h1>
                                                                                                                                <p>
                                                                                                                                          Consulte os regulamentos e as diretrizes oficiais da instituição.
                                                                                                                                                  </p>
                                                                                                                                                        </header>

                                                                                                                                                              <section className="cardGrid">
                                                                                                                                                                      {documentos.map((documento) => (
                                                                                                                                                                                <article className="card" key={documento.sigla}>
                                                                                                                                                                                            <span className="eyebrow">{documento.sigla}</span>
                                                                                                                                                                                                        <h2>{documento.nome}</h2>
                                                                                                                                                                                                                    <p>{documento.descricao}</p>
                                                                                                                                                                                                                                <span className="muted">Documento ainda não publicado.</span>
                                                                                                                                                                                                                                          </article>
                                                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                                                        </section>
                                                                                                                                                                                                                                                            </main>
                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                              