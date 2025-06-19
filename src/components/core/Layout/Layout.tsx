import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Source_Sans_3 as Sans } from "next/font/google";

const fontSans = Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${fontSans.className}`}>
      <Header />
      <main className="min-h-screen px-20 bg-gradient-to-b from-blue-50 to-white w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
