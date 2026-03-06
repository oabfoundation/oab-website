import WhatWeCareFor from "@/components/mainLayout/home/CareFor";
import MissionVision from "@/components/mainLayout/home/MissionVision";
import Numbers from "@/components/mainLayout/home/Numbers";
import OabBanner from "@/components/mainLayout/home/OabBanner";
import OurPartners from "@/components/mainLayout/home/Partners";
import SuccessStories from "@/components/mainLayout/home/SuccessStories";
import Volunteer from "@/components/mainLayout/home/Volunteer";
import WeCoverBangladesh from "@/components/mainLayout/home/WeCoverBangladesh";
import HowYouCanHelp from "@/components/mainLayout/home/YouCanHelp";

const Home = () => {
  return (
    <section className="min-h-screen">
      <OabBanner />
      <div className="max-w-11/12 mx-auto">
        <MissionVision />
        <Volunteer></Volunteer>
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
