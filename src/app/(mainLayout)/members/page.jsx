import React from "react";
import Leader from "@/components/mainLayout/members/Leader";
import Team from "@/components/mainLayout/members/Team";
export const metadata = {
  title: "Members",
  description:
    "Learn about OAB Foundation's journey since 2018, our mission, vision, and how we are working towards UN Sustainable Development Goals.",
};
const Teams = () => {
  return (
    <div className="min-h-screen max-w-11/12 mx-auto px-6">
      {/* teams */}
      <div>
        <Team />
      </div>
      {/* Leaders  */}
      <Leader />
    </div>
  );
};

export default Teams;
