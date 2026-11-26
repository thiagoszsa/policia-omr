
import Link from "next/link";

const organizacoes = [
  {
      sigla: "ATT",
          nome: "Aplicação de Treinamentos",
              descricao: "Responsável pelas instruções e aplicações de treinamentos.",
                },
                  {
                      sigla: "CIM",
                          nome: "Curso de Instrução Militar",
                              descricao: "Registro de alunos, instrutores e resultados das instruções.",
                                },
                                ];

                                export default function Aulas() {
                                  return (
                                      <main className="page">
                                            <header className="pageHeader">
                                                    <Link href="/painel" className="backLink">
                                                              ← Voltar ao painel
                                                                      </Link>
                                                                              <p className="eyebrow">POLÍCIA OMR</p>
                                                                                      <h1>Aulas e instruções</h1>
                                                                                              <p>
                                                                                                        Área institucional destinada ao acompanhamento das atividades
                                                                                                                  de formação e instrução militar.
                                                                                                                          </p>
                                                                                                                                </header>

                                                                                                                                      <section className="cardGrid">
                                                                                                                                              {organizacoes.map((item) => (
                                                                                                                                                        <article className="card" key={item.sigla}>
                                                                                                                                                                    <span className="eyebrow">{item.sigla}</span>
                                                                                                                                                                                <h2>{item.nome}</h2>
                                                                                                                                                                                            <p>{item.descricao}</p>
                                                                                                                                                                                                        <span className="muted">
                                                                                                                                                                                                                      Módulo em desenvolvimento.
                                                                                                                                                                                                                                  </span>
                                                                                                                                                                                                                                            </article>
                                                                                                                                                                                                                                                    ))}
                                                                                                                                                                                                                                                          </section>

                                                                                                                                                                                                                                                                <section className="card">
                                                                                                                                                                                                                                                                        <h2>Registros de instrução</h2>
                                                                                                                                                                                                                                                                                <p>
                                                                                                                                                                                                                                                                                          As postagens de CIM serão registradas aqui, com identificação
                                                                                                                                                                                                                                                                                                    do instrutor, aluno, organização responsável e resultado.
                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                    <span className="muted">
                                                                                                                                                                                                                                                                                                                              Nenhum registro disponível no momento.
                                                                                                                                                                                                                                                                                                                                      </span>
                                                                                                                                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                                                                                                                                                </main>
                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                                                                                                  