import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import OabBanner from "@/components/mainLayout/pages/OabBanner";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="sticky top-0 bg-white z-50">
        <Header />
      </header>
      <main className=" bg-[#fff5f0]">
           <OabBanner></OabBanner>
        <section className="max-w-11/12 mx-auto bg-[#fff5f0]">
          {children}
        </section>
      </main>
      <footer className="bg-green-50">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
