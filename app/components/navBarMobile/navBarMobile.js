"use client";
import React, { useState } from "react";
import styles from "./navBarMobile.module.css";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const HamburgerMenu = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
        <div className={`${styles.line} ${isOpen ? styles.open : ""}`} />
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="#home" onClick={toggleMenu}>
            {language === "en" ? "Home" : "Inicio"}
          </Link>
        </li>
        <li>
          <Link href="#about" onClick={toggleMenu}>
            {language === "en" ? "About me" : "Sobre mí"}
          </Link>
        </li>
        <li>
          <Link href="#education" onClick={toggleMenu}>
            {language === "en" ? "Education" : "Educación"}
          </Link>
        </li>
        <li>
          <Link href="#experience" onClick={toggleMenu}>
            {language === "en" ? "Experience" : "Experiencia"}
          </Link>
        </li>
        <li>
          <Link href="#projects" onClick={toggleMenu}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={toggleMenu}>
            {language === "en" ? "Contact" : "Contacto"}
          </Link>
        </li>
        <li>
          <p onClick={toggleLanguage}>
            {language === "en"
              ? "Change language to Spanish"
              : "Cambiar idioma a Inglés"}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
