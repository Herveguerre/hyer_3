import Footer from "@/components/Footer";
import ContactHeader from "@/components/aboutPage/AboutHeader";
import ContacterHyer from "@/components/contactPage/ContacterHyer";
import ContactezNous from "@/components/contactPage/ContactezNous";
import React from "react";

export default function Contact() {
  return (
    <div>
      <ContactHeader/>
      <ContacterHyer/>
      <ContactezNous/>
      <Footer /> 
    </div>
  );
}
