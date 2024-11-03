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
      className={styles.container}
      id={id}
    >
      <h2 className={globalStyles.title}>
        {language === "en" ? "Work Experience" : "Experiencia laboral"}
      </h2>
      <div>
        <p>COMING</p>
        <Image
          src={"/images/loading.gif"}
          height={150}
          width={150}
          alt="coming soon"
        />
        <p>SOON</p>
      </div>
    </section>
  );
};

export default experiencia;
