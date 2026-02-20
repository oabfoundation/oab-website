import WhatWeCareFor from "@/components/mainLayout/pages/CareFor";
import OurImpact from "@/components/mainLayout/pages/Impact";
import Leadership from "@/components/mainLayout/pages/Leadership";
import Numbers from "@/components/mainLayout/pages/Numbers";
import OabBanner from "@/components/mainLayout/pages/OabBanner";
import OurPrograms from "@/components/mainLayout/pages/OurPrograms";
import OurVision from "@/components/mainLayout/pages/OurVision";
import SuccessStories from "@/components/mainLayout/pages/SuccessStories";
import WeCoverBangladesh from "@/components/mainLayout/pages/WeCoverBangladesh";
import WhatWeDo from "@/components/mainLayout/pages/WhatWeDo";
import HowYouCanHelp from "@/components/mainLayout/pages/YouCanHelp";


const Home = () => {
  return (
       <section className="flex flex-col min-h-screen items-center justify-center bg-[#fff5f0] min-w-300 font-sans">
   <OabBanner></OabBanner>
   <WhatWeDo></WhatWeDo>
   <OurPrograms></OurPrograms>
   <OurVision></OurVision>
   <SuccessStories></SuccessStories>
   <WeCoverBangladesh></WeCoverBangladesh>
   <Leadership></Leadership>
   <Numbers></Numbers>
   <OurImpact></OurImpact>

<WhatWeCareFor></WhatWeCareFor>
<HowYouCanHelp></HowYouCanHelp>
    </section>
  );
};

export default Home;
