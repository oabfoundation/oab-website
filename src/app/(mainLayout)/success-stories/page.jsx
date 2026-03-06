import SuccessStories from "@/components/mainLayout/home/SuccessStories";
import React from "react";
export const metadata = {
  title: "Success Stories",
  description:
    "Learn about OAB Foundation's journey since 2018, our mission, vision, and how we are working towards UN Sustainable Development Goals.",
};
const Success = () => {
  return (
    <section>
      <SuccessStories></SuccessStories>
    </section>
  );
};

export default Success;
