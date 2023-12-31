import Link from "next/link";
import React from "react";

export default function AboutHeader() {
  return (
    <div>
      <div className="logo_mobil">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0V55H27.7551C42.7804 55 55 42.7804 55 27.7551V0H0ZM53.8406 27.7551C53.8406 42.1311 42.1311 53.8406 27.7551 53.8406H1.15936V1.15936H53.8406V27.7551Z" fill="#000D10"></path><path d="M10.4111 19.1988H17.2513C19.3382 19.1988 21.054 17.5061 21.054 15.3961V29.4475H25.7378V5.72705H21.0308V15.4193H10.4111V5.72705H5.72729V29.4475H10.4111V19.1988Z" fill="#000D10"></path><path d="M31.6968 12.15C33.1344 11.9645 34.2938 10.8052 34.4793 9.36757C34.7575 7.25754 32.9721 5.47213 30.8621 5.75037C29.4245 5.93587 28.2651 7.09523 28.0796 8.53284C27.8014 10.6429 29.5868 12.4283 31.6968 12.15ZM31.72 6.30687C32.833 6.49236 33.7373 7.39666 33.9228 8.48646C34.2242 10.3182 32.6475 11.895 30.8157 11.5935C29.7027 11.408 28.7984 10.5037 28.6361 9.39076C28.3115 7.58216 29.8882 6.00543 31.72 6.30687Z" fill="#000D10"></path><path d="M30.7231 9.25195H31.21H31.3492L31.952 10.4345H32.6245L31.952 9.11282C32.323 8.95051 32.5085 8.67227 32.5085 8.32446C32.5085 7.69841 32.1375 7.39697 31.1173 7.39697H30.1202V10.4345H30.7231V9.25195ZM30.7231 7.8839H31.1869C31.6042 7.8839 31.8825 7.99984 31.8825 8.34765C31.8825 8.64908 31.6738 8.81139 31.21 8.81139H30.7231V7.8839Z" fill="#000D10"></path></svg>

        <div className="imglogoabout">
          <img src="/img/img_about/logoburger.png"/>
          <div>
            <img src="/img/img_about/logoavion.png"/>
          </div>
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
