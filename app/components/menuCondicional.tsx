
"use client";

import { usePathname } from "next/navigation";
import Menu from "./Menu";

export default function MenuCondicional() {
  const pathname = usePathname();

    const paginasPublicas = ["/", "/cadastro"];

      if (paginasPublicas.includes(pathname)) {
          return null;
            }

              return <Menu />;
              }
              