import React from "react";

export default function Derniervolsajoutes() {
  return (
    <div className="bg_derniervols">
      <div className="space w1440 marge">
        <div className="tetetableau flex">
          <p>Derniers vols ajoutés</p>
          <button className="derniervols">Recherche de vols</button>
        </div>
        <div className="tableau">
          <div className="noir flex">
            <p>Farnborrough Sion</p>
            <p>Sens unique</p>
            <div>
              <p>Proposé*</p>
              <p>Prix par siège</p>
              <p>2 695 €</p>
            </div>
          </div>
          <div className="gris flex">
            <p>Farnborrough Sion</p>
            <p>Sortant</p>
          </div>

          <div className="flex">
            <div className="w">
              <p>Depuis</p>
              <p>Farnborough , GB</p>
              <div className="flex">
                <p>12/09/2022</p>
                <p>09h30 GMT+1</p>{" "}
              </div>
              <p>Aéroport de Farnborough</p>
            </div>
            <div>
              <p>Pour</p>
              <p>Sion , CH</p>
              <p>Aéroport de Sion</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
