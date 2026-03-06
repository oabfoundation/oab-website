import React from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <Header />
      </header>
      <main className=" bg-[#fff5f0]">{children}</main>
      <footer className="bg-green-50">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
