import { ReactNode } from "react";
import Header from "@src/components/Header";
import Footer from "@src/components/Footer";


export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
