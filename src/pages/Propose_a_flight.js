import Derniervolsajoutes from "@/components/volspartagesPage/Derniervolsajoutes";
import React from "react";
import Aurevoirterminaux from "@/components/volspartagesPage/Aurevoirterminaux";
import NosclienappVolspartages from "@/components/volspartagesPage/NosclienappVolspartages";
import MeilleursdestinationVolspartafes from "@/components/volspartagesPage/MeilleursdestinationVolspartafes";
import Volsproposes from "@/components/volspartagesPage/Volsproposes";
import Partageunvol from "@/components/volspartagesPage/Partageunvol";
import VolspartageHeader from "@/components/volspartagesPage/VolspartageHeader";

export default function Propose_a_flight() {
  return (
    <div>
      <VolspartageHeader />
      <Derniervolsajoutes />
      <Aurevoirterminaux />
      <NosclienappVolspartages />
      <MeilleursdestinationVolspartafes />
      <Volsproposes />
      <Partageunvol />
    </div>
  );
}
