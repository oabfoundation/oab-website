import React from "react";
import Banner from "./Components/Banner";
import OngoingProjects from "./Components/OngoingProjects";
import Gallery from "./Components/Gallery";
import Volanteer from "./Components/BeAVolanteer";

const Dashboard = () => {
  return <section className="bg-slate-100">

<Banner></Banner>
<OngoingProjects></OngoingProjects>
<Gallery></Gallery>
<Volanteer></Volanteer>

  </section>;
};

export default Dashboard;
