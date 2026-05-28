import { ReactNode } from "react";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <Sidebar />

      <Header />

      <main className="ml-0 min-h-screen px-4 pb-10 pt-24 lg:ml-64 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}