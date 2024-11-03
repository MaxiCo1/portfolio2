"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { useLanguage } from "@/app/context/LanguageContext";

const Header = ({ id, button }) => {
  const { language, toggleLanguage } = useLanguage();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);

    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [language]);

  return (
    <header className={styles.Container} id={id}>
      <h2>{language === "en" ? "HELLO WORLD" : "HOLA MUNDO"}</h2>
      <h1 key={animationKey}>
        {language === "en" ? "I'am Maxi Coletti" : "Soy Maxi Coletti"}
      </h1>
      <p>
        {language === "en" ? "Frontend Developer" : "Desarrollador Frontend"}
      </p>
      <button>
        <a href={`#${button}`}>
          {language === "en" ? "More about me" : "Más sobre mí"}
        </a>
      </button>
      <p onClick={toggleLanguage} className={styles.language}>
        {language === "es" ? "English" : "Español"}
      </p>
    </header>
  );
};

export default Header;
