import WhatWeCareFor from "@/components/mainLayout/pages/CareFor";
import OurImpact from "@/components/mainLayout/pages/Impact";
import Numbers from "@/components/mainLayout/pages/Numbers";
import OabBanner from "@/components/mainLayout/pages/OabBanner";
import OurVision from "@/components/mainLayout/pages/OurVision";
import WeCoverBangladesh from "@/components/mainLayout/pages/WeCoverBangladesh";
import WhatWeDo from "@/components/mainLayout/pages/WhatWeDo";


const Home = () => {
  return (
       <section className="flex flex-col min-h-screen items-center justify-center bg-[#fff5f0] min-w-300 font-sans">
   <OabBanner></OabBanner>
   <WhatWeDo></WhatWeDo>
   <OurVision></OurVision>
   <WeCoverBangladesh></WeCoverBangladesh>
   <Numbers></Numbers>
   <OurImpact></OurImpact>
<WhatWeCareFor></WhatWeCareFor>
    </section>
  );
};

export default Home;
