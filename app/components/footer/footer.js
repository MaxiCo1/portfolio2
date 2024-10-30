"use client";
import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const footer = ({ id }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return (
    <footer className={styles.footerContainer} id={id}>
      <div>
        <Image
          src={"/images/linkedin-logo.png"}
          width={50}
          height={50}
          alt="linkedin"
        />
        <h3>{language === "en" ? "Find me at" : "Encuéntrame en"}</h3>
        <p>www.linkedin.com/in/maximiliano-coletti</p>
      </div>
      <div>
        <Image src={"/images/email.png"} width={50} height={50} alt="email" />
        <h3>{language === "en" ? "Email me at" : "Envíeme un mail a"}</h3>
        <p>coletti.maxi@gmail.com</p>
      </div>
      <div>
        <Image src={"/images/phone.png"} width={50} height={50} alt="phone" />
        <h3>{language === "en" ? "Call me at" : "Llámame al"}</h3>
        <p>+54 9 11 3888 2644</p>
      </div>
    </footer>
  );
};

export default footer;