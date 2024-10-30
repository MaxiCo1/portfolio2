"use client";
import React from "react";
import styles from "./experience.module.css";
import globalStyles from "../../styles/global.module.css";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const experiencia = ({ id }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return (
    <section
      className={`${globalStyles.container} ${styles.container}`}
      id={id}
    >
      <h2 className={globalStyles.title}>{language === "en" ? "Work Experience" : "Experiencia laboral"}</h2>
      <Image
        src={"/images/comingSoon.png"}
        height={500}
        width={500}
        alt="coming soon"
      />
    </section>
  );
};

export default experiencia;
