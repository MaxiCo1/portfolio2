"use client";
import React from "react";
import styles from "./aboutMe.module.css";
import globalStyles from "../../styles/global.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

const aboutMe = ({ id }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return (
    <section className={globalStyles.container} id={id}>
      <h2 className={globalStyles.title}>
        {language === "en" ? "About me" : "Sobre mí"}
      </h2>
      <div className={styles.insideContainer}>
        <Image
          src="/images/profilePic.png"
          width={200}
          height={300}
          alt="Me"
          style={{ borderRadius: "10%" }}
        />
        <p className={globalStyles.text}>
          {language === "en"
            ? "I am a graduate in Multimedia Technology, seeking employment as a frontend developer. I am eager to use my skills and knowledge to contribute to the company´s growth and to develop as a professional."
            : "Soy graduado en Tecnología Multimedia y estoy en busca de empleo como desarrollador frontend. Estoy listo para utilizar mis habilidades y conocimientos para contribuir al crecimiento de la empresa y desarrollarme como profesional."}
        </p>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.infoContainer}>
          <h3 className={globalStyles.subtitle}>
            {language === "en" ? "Information:" : "Información:"}
          </h3>
          <ul className={styles.list}>
            <li>
              <h4>{language === "en" ? "Full name:" : "Nombre completo:"}</h4>

              <span>Maximiliano Esteban Coletti</span>
            </li>
            <li>
              <h4>{language === "en" ? "Age:" : "Edad:"}</h4>

              <span>23</span>
            </li>
            <li>
              <h4>LinkedIn:</h4>
              <span>
                <Link
                  href="https://linkedin.com/in/maximiliano-coletti"
                  passHref={true}
                >
                  linkedin.com/in/ maximiliano-coletti
                </Link>
              </span>
            </li>
            <li>
              <h4>Mail:</h4>
              <span>
                <Link href="mailto:coletti.maxi@gmail.com" passHref={true}>
                  coletti.maxi@gmail.com
                </Link>
              </span>
            </li>
            <li>
              <h4>{language === "en" ? "Phone:" : "Celular:"}</h4>

              <span>
                <Link href="tel:+54 11 3888 2644" passHref={true}>
                  +54 11 3888 2644
                </Link>
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={globalStyles.subtitle}>
            {language === "en" ? "Main skills:" : "Habilidades principales:"}
          </h3>
          <ul className={styles.list}>
            <li>
              <h4>HTML - 80%</h4>
              <div className={styles.line}>
                <div className={`${styles.lineFill} ${styles.percent80}`} />
              </div>
            </li>
            <li>
              <h4>CSS - 80%</h4>
              <div className={styles.line}>
                <div className={`${styles.lineFill} ${styles.percent80}`} />
              </div>
            </li>
            <li>
              <h4>Javascript - 70%</h4>

              <div className={styles.line}>
                <div className={`${styles.lineFill} ${styles.percent70}`}></div>
              </div>
            </li>
            <li>
              <h4>React.js - 60%</h4>

              <div className={styles.line}>
                <div className={`${styles.lineFill} ${styles.percent60}`} />
              </div>
            </li>
            <li>
              <h4>Next.js - 60%</h4>

              <div className={styles.line}>
                <div className={`${styles.lineFill} ${styles.percent60}`} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <a
          className={`${styles.btn} ${styles.btnEnglish}`}
          download
          href="./cv/CV Maxi Coletti ENG.pdf"
        >
          Download English CV
        </a>
        <a
          className={`${styles.btn} ${styles.btnSpanish}`}
          download
          href="./cv/CV Maxi coletti.pdf"
        >
          Descargar CV en Español
        </a>
      </div>
    </section>
  );
};

export default aboutMe;
