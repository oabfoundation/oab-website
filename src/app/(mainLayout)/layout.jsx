import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <Header />
      </header>
      <main className="max-w-11/12 mx-auto">{children}</main>
      <footer className="bg-green-50">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
