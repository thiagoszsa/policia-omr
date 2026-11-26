
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
      const { token, password } = await request.json();

          const expectedToken = process.env.FOUNDER_SETUP_TOKEN;
              const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
                  const secretKey = process.env.SUPABASE_SECRET_KEY;

                      if (!expectedToken || !supabaseUrl || !secretKey) {
                            return NextResponse.json(
                                    { error: "Configuração incompleta." },
                                            { status: 500 }
                                                  );
                                                      }

                                                          if (typeof token !== "string" || token !== expectedToken) {
                                                                return NextResponse.json(
                                                                        { error: "Acesso não autorizado." },
                                                                                { status: 401 }
                                                                                      );
                                                                                          }

                                                                                              if (typeof password !== "string" || password.length < 12) {
                                                                                                    return NextResponse.json(
                                                                                                            { error: "A senha precisa ter pelo menos 12 caracteres." },
                                                                                                                    { status: 400 }
                                                                                                                          );
                                                                                                                              }

                                                                                                                                  const supabase = createClient(supabaseUrl, secretKey, {
                                                                                                                                        auth: {
                                                                                                                                                autoRefreshToken: false,
                                                                                                                                                        persistSession: false
                                                                                                                                                              }
                                                                                                                                                                  });

                                                                                                                                                                      const { data, error } = await supabase.auth.admin.listUsers({
                                                                                                                                                                            page: 1,
                                                                                                                                                                                  perPage: 1000
                                                                                                                                                                                      });

                                                                                                                                                                                          if (error) {
                                                                                                                                                                                                return NextResponse.json(
                                                                                                                                                                                                        { error: "Não foi possível localizar a conta." },
                                                                                                                                                                                                                { status: 500 }
                                                                                                                                                                                                                      );
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                              const founder = data.users.find(
                                                                                                                                                                                                                                    (user) =>
                                                                                                                                                                                                                                            user.email?.toLowerCase() ===
                                                                                                                                                                                                                                                    "a-twink@contas.policiaomr.invalid"
                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                            if (!founder) {
                                                                                                                                                                                                                                                                  return NextResponse.json(
                                                                                                                                                                                                                                                                          { error: "Conta do fundador não encontrada." },
                                                                                                                                                                                                                                                                                  { status: 404 }
                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                const { error: updateError } =
                                                                                                                                                                                                                                                                                                      await supabase.auth.admin.updateUserById(
                                                                                                                                                                                                                                                                                                              founder.id,
                                                                                                                                                                                                                                                                                                                      { password }
                                                                                                                                                                                                                                                                                                                            );

                                                                                                                                                                                                                                                                                                                                if (updateError) {
                                                                                                                                                                                                                                                                                                                                      return NextResponse.json(
                                                                                                                                                                                                                                                                                                                                              { error: "Não foi possível atualizar a senha." },
                                                                                                                                                                                                                                                                                                                                                      { status: 500 }
                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                    return NextResponse.json({ success: true });
                                                                                                                                                                                                                                                                                                                                                                      } catch {
                                                                                                                                                                                                                                                                                                                                                                          return NextResponse.json(
                                                                                                                                                                                                                                                                                                                                                                                { error: "Solicitação inválida." },
                                                                                                                                                                                                                                                                                                                                                                                      { status: 400 }
                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                            