import Impact from "../pages/Impact";
import Numbers from "../pages/Numbers";
import OabBanner from "../pages/OabBanner";
import OurVision from "../pages/OurVision";
import WeCoverBangladesh from "../pages/WeCoverBangladesh";
import WhatWeDo from "../pages/WhatWeDo";

const Home = () => {
  return (
       <section className="flex flex-col min-h-screen items-center justify-center bg-[#fff5f0] min-w-300 font-sans">
   <OabBanner></OabBanner>
   <WhatWeDo></WhatWeDo>
   <OurVision></OurVision>
   <WeCoverBangladesh></WeCoverBangladesh>
   <Numbers></Numbers>
   <Impact></Impact>
    </section>
  );
};

export default Home;
