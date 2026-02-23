import WhatWeCareFor from "@/components/mainLayout/pages/CareFor";
import MissionVision from "@/components/mainLayout/pages/MissionVision";
import Numbers from "@/components/mainLayout/pages/Numbers";
import OabBanner from "@/components/mainLayout/pages/OabBanner";
import OurPartners from "@/components/mainLayout/pages/Partners";
import SuccessStories from "@/components/mainLayout/pages/SuccessStories";
import WeCoverBangladesh from "@/components/mainLayout/pages/WeCoverBangladesh";
import HowYouCanHelp from "@/components/mainLayout/pages/YouCanHelp";

const Home = () => {
  return (
    <section className="min-h-screen">
      <OabBanner />
      <div className="max-w-11/12 mx-auto">
        <MissionVision />
        {/* <OurPrograms></OurPrograms> */}
        <WeCoverBangladesh></WeCoverBangladesh>
        <Numbers></Numbers>
        <WhatWeCareFor></WhatWeCareFor>
        <HowYouCanHelp></HowYouCanHelp>
        <SuccessStories></SuccessStories>
        <OurPartners></OurPartners>
      </div>
    </section>
  );
};

export default Home;
