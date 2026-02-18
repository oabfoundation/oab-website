import OabBanner from "../pages/OabBanner";
import WhatWeDo from "../pages/WhatWeDo";

const Home = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
   <OabBanner></OabBanner>
   <WhatWeDo></WhatWeDo>
    </section>
  );
};

export default Home;
