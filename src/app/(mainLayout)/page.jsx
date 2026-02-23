import WhatWeCareFor from "@/components/mainLayout/pages/CareFor";
import OurImpact from "@/components/mainLayout/pages/Impact";
import Numbers from "@/components/mainLayout/pages/Numbers";
import OabBanner from "@/components/mainLayout/pages/OabBanner";
import OurPrograms from "@/components/mainLayout/pages/OurPrograms";
import OurVision from "@/components/mainLayout/pages/OurVision";
import OurPartners from "@/components/mainLayout/pages/Partners";
import SuccessStories from "@/components/mainLayout/pages/SuccessStories";
import Transparency from "@/components/mainLayout/pages/Trancparency";
import WeCoverBangladesh from "@/components/mainLayout/pages/WeCoverBangladesh";
import WhatWeDo from "@/components/mainLayout/pages/WhatWeDo";
import HowYouCanHelp from "@/components/mainLayout/pages/YouCanHelp";

const Home = () => {
  return (
    <section>
      <OabBanner></OabBanner>
      <WhatWeDo></WhatWeDo>
      <OurVision></OurVision>
      <OurPrograms></OurPrograms>
      <SuccessStories></SuccessStories>
      <WeCoverBangladesh></WeCoverBangladesh>
      <Numbers></Numbers>
      <OurImpact></OurImpact>
      <Transparency></Transparency>
      <WhatWeCareFor></WhatWeCareFor>
      <HowYouCanHelp></HowYouCanHelp>
      <OurPartners></OurPartners>
    </section>
  );
};

export default Home;
