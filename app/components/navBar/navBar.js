"use client";
import React, { useState, useEffect } from "react";
import styles from "./navBar.module.css";
import { useLanguage } from "@/app/context/LanguageContext";

const NavBar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const sectionIds = Object.values(sections);
    const observerOptions = { 
      threshold: 0.3,
      rootMargin: "0px 0px -30% 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav className={styles.container}>
      <ul>
        <li
          onClick={() => handleScroll(sections.home)}
          className={activeSection === sections.home ? styles.active : ""}
        >
          <p className={styles.linkp}>{language === "en" ? "Home" : "Inicio"}</p>
          
        </li>
        <li
          onClick={() => handleScroll(sections.about)}
          className={`${activeSection === sections.about ? styles.active : ""}`}
        >
          <p className={styles.linkp}>{language === "en" ? "About me" : "Sobre mí"}</p>
        </li>
        <li
          onClick={() => handleScroll(sections.education)}
          className={`${activeSection === sections.education ? styles.active : ""}`}
        >
          <p className={styles.linkp}>{language === "en" ? "Education" : "Educación"}</p>
        </li>
        <li
          onClick={() => handleScroll(sections.experience)}
          className={`${activeSection === sections.experience ? styles.active : ""}`}
        >
          <p className={styles.linkp}>{language === "en" ? "Experience" : "Experiencia"}</p>
        </li>
        <li
          onClick={() => handleScroll(sections.projects)}
          className={`${activeSection === sections.projects ? styles.active : ""}`}
        >
          <p className={styles.linkp}>Portfolio</p>
        </li>
        <li
          onClick={() => handleScroll(sections.contact)}
          className={`${activeSection === sections.contact ? styles.active : ""}`}
        >
          <p className={styles.linkp}>{language === "en" ? "Contact" : "Contacto"}</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
