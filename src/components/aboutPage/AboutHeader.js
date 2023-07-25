import Link from "next/link";
import { useState } from "react";

export default function AboutHeader() {
  // Variables d'état pour suivre l'état d'ouverture/fermeture des menus
  const [menuOpen1, setMenuOpen1] = useState(false);

  // Fonction pour basculer l'état d'ouverture du premier menu
  const toggleMenu1 = () => {
    setMenuOpen1(!menuOpen1);
  };
  return (
    <div>
      <div className="logo_mobil">
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0V55H27.7551C42.7804 55 55 42.7804 55 27.7551V0H0ZM53.8406 27.7551C53.8406 42.1311 42.1311 53.8406 27.7551 53.8406H1.15936V1.15936H53.8406V27.7551Z"
            fill="#000D10"
          ></path>
          <path
            d="M10.4111 19.1988H17.2513C19.3382 19.1988 21.054 17.5061 21.054 15.3961V29.4475H25.7378V5.72705H21.0308V15.4193H10.4111V5.72705H5.72729V29.4475H10.4111V19.1988Z"
            fill="#000D10"
          ></path>
          <path
            d="M31.6968 12.15C33.1344 11.9645 34.2938 10.8052 34.4793 9.36757C34.7575 7.25754 32.9721 5.47213 30.8621 5.75037C29.4245 5.93587 28.2651 7.09523 28.0796 8.53284C27.8014 10.6429 29.5868 12.4283 31.6968 12.15ZM31.72 6.30687C32.833 6.49236 33.7373 7.39666 33.9228 8.48646C34.2242 10.3182 32.6475 11.895 30.8157 11.5935C29.7027 11.408 28.7984 10.5037 28.6361 9.39076C28.3115 7.58216 29.8882 6.00543 31.72 6.30687Z"
            fill="#000D10"
          ></path>
          <path
            d="M30.7231 9.25195H31.21H31.3492L31.952 10.4345H32.6245L31.952 9.11282C32.323 8.95051 32.5085 8.67227 32.5085 8.32446C32.5085 7.69841 32.1375 7.39697 31.1173 7.39697H30.1202V10.4345H30.7231V9.25195ZM30.7231 7.8839H31.1869C31.6042 7.8839 31.8825 7.99984 31.8825 8.34765C31.8825 8.64908 31.6738 8.81139 31.21 8.81139H30.7231V7.8839Z"
            fill="#000D10"
          ></path>
        </svg>

        <div className="burgercontainer ">
          <div className="burger_1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
              viewBox="0 0 256 256"
              width="25"
              height="25"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M128,224l-40,8V208l16-16V152L24,168V144l80-40,.11255-56a24,24,0,0,1,48,0l.11255,56,80,40v24l-80-16v40L168,208v24Z"
                fill="none"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8px"
              />
            </svg>
          </div>

          <div className="burger" onClick={toggleMenu1}>
            &#x2630;
          </div>
          {menuOpen1 && (
            <div className="menu1">
              <div className="menubtn">
                <button>Connection</button> <button>Enregistrer</button>
                <button className="x" onClick={toggleMenu1}>
                  &#x2715;
                </button>
              </div>

              <div className=" menu2 flex">
                <div className="menubox">
                  <p className="font30">sur demande</p>
                  <p>charte privé</p>
                </div>
                <div className="menubox">
                  <p className="font30">vols partagés</p>
                  <Link href="/Propose_a_flight">
                    <p className="grey">vols disponibles</p>
                  </Link>
                  <p className="grey">proposer un vol</p>
                </div>
              </div>
              <div className="menu3 flex">
                <div className="menubox">
                  <p className="font30">Adhésions</p>
                  <p className="grey">Élever</p>
                  <p>Hyer® Altitude</p>
                </div>
                <div className="menubox">
                  <p className="font30">Entreprise</p>
                  <Link href="/About">
                    <p className="grey">À propos de nous</p>
                  </Link>
                  <Link href="/Solutions">
                    <p className="grey">Solutions</p>
                  </Link>
                  <p className="grey">Nouvelles</p>
                  <Link href="/Contact">
                    <p className="grey">Contact</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="about_nav">
        <Link href="/index">home</Link>
        <Link href="/Solutions">
          <li>Solutions</li>
        </Link>
        <Link href="/About">
          <li>A propos de nous</li>
        </Link>
        <Link href="/Contact">
          <li>Contact</li>
        </Link>
      </div>
    </div>
  );
}
