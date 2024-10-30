"use client";
import React from "react";
import styles from "./header.module.css";
import { useLanguage } from "@/app/context/LanguageContext";

const header = ({ id, button }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language, toggleLanguage } = useLanguage();
  return (
    <section className={styles.Container} id={id}>
      <button onClick={toggleLanguage}>
        Cambiar a {language === "es" ? "English" : "Español"}
      </button>
      <h2>{language === "en" ? "HELLO WORLD" : "HOLA MUNDO"}</h2>
      <h1>
      {language === "en" ? "i´m Maxi Coletti" : "Soy Maxi Coletti"}
      </h1>
      <p>{language === "en" ? "Frontend Developer" : "Desarrollador Frontend"}</p>
      <button>
        <a href={`#${button}`}>{language === "en" ? "More about me" : "Más sobre mí"}</a>
      </button>
    </section>
  );
};

export default header;
