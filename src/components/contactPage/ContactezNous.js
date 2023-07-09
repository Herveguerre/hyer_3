import React from "react";

export default function ContactezNous() {
  return (
    <div className="ContactezNous">
      <div className="ContactezNous_container">
        <div className="ContactezNous_title">
          <p>
            Contactez-
            <br />
            nous
          </p>
        </div>

        <div className="ContactezNous_form">
          <p>
            Remplissez les informations requises dans le formulaire et nous vous
            répondrons dans l'heure. Ou contactez Hyer® via nos réseaux sociaux.
          </p>
          <div></div>
          <p>
            Vos informations resteront privées et confidentielles et seront
            utilisées uniquement par Hyer®. Les champs marqués * doivent être
            remplis avant de soumettre. Tous les détails fournis par vous seront
            détenus par Hyer® et utilisés conformément à notre politique de
            confidentialité.
          </p>

          <form>
            <div>
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                id="name"
               
                required
              />
            </div>

            <div>
              <label htmlFor="email">Adresse e-mail :</label>
              <input type="email" id="email" required />
            </div>

            <div>
              <label htmlFor="phone">Numéro de téléphone :</label>
              <input type="tel" id="phone" required />
            </div>

            <div>
              <label htmlFor="subject">Sujet :</label>
              <input type="text" id="subject" required />
            </div>

            <div>
              <label htmlFor="message">Message :</label>
              <textarea id="message" required></textarea>
            </div>

            <button  type="submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}
