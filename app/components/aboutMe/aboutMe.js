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
    <section
      className={`${globalStyles.container} ${styles.containerBackground}`}
      id={id}
    >
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
          {language === "en" ? (
            <>
              I&apos;m a <b>Multimedia Technology</b> graduate with a focus on{" "}
              <b>frontend development</b> and a passion for creating{" "}
              <b>intuitive</b> and <b>functional digital experiences</b>. I have
              expertise in technologies such as <b>React</b>, <b>Next.js</b>,
              and knowledge in <b>UI/UX design</b>. I&apos;m seeking my first
              job opportunity to apply my <b>skills</b>, learn from{" "}
              <b>dynamic teams</b>, and contribute with{" "}
              <b>innovative solutions</b>. I&apos;m committed to{" "}
              <b>continuous learning</b> and <b>professional growth</b>.
            </>
          ) : (
            <>
              Soy un graduado en <b>Tecnología Multimedial</b> con un fuerte
              enfoque en <b>desarrollo frontend</b>. Apasionado por la creación
              de <b>experiencias digitales intuitivas</b> y <b>funcionales</b>,
              domino tecnologías como <b>React</b>, <b>Next.js</b>, y{" "}
              <b>diseño UI/UX</b>. Busco mi primera oportunidad laboral para
              aplicar mis <b>conocimientos</b> en <b>entornos dinámicos</b>,
              aprender de <b>grandes equipos</b> y aportar{" "}
              <b>soluciones innovadoras</b>. Comprometido con el{" "}
              <b>aprendizaje continuo</b> y el <b>crecimiento profesional</b>.
            </>
          )}
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
