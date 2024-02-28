import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/index.css";
import { Header } from "./components/Header";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className="wrapper">
          <section>
            <Header />
            <main>{children}</main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
