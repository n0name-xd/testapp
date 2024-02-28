import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/index.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body>
          <section>
            <header></header>
            <main>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
