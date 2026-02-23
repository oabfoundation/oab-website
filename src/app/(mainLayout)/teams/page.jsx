import React from "react";
import Leader from "@/components/mainLayout/teams/Leader";
import Team from "@/components/mainLayout/teams/Team";

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
