import React from "react";
import Leader from "@/components/mainLayout/teams/Leader";
import Team from "@/components/mainLayout/teams/Team";

const Teams = () => {
  return (
    <section>
      {/* teams */}
      <div>
        <Team />
      </div>
      {/* Leaders  */}
      <Leader />
    </section>
  );
};

export default Teams;
