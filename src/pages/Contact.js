import Footer from "@/components/Footer";
import AboutHeader from "@/components/aboutPage/AboutHeader";
import ContacterHyer from "@/components/contactPage/ContacterHyer";
import ContactezNous from "@/components/contactPage/ContactezNous";
import React from "react";

export default function Contact() {
  return (
    <div>
      <AboutHeader />
      <ContacterHyer/>
      <ContactezNous/>
      <Footer />
    </div>
  );
}
