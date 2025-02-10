"use client";
import React from "react";
import styles from "./education.module.css";
import globalStyles from "../../styles/global.module.css";
import { useLanguage } from "@/app/context/LanguageContext";

const education = ({ id }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return (
    <section
      className={`${globalStyles.container} ${styles.container}`}
      id={id}
    >
      <h2 className={globalStyles.title}>
        {language === "en" ? "Education" : "Educación"}
      </h2>
      <div className={styles.mainContainer}>
        <div className={styles.educationContainer}>
          <div>
            <h3 className={globalStyles.subtitle}>
              {language === "en"
                ? "Frontend certificate"
                : "Certificado Frontend"}
            </h3>
            <h4>
              {language === "en"
                ? "June 2024 - Present"
                : "Junio 2024 - Presente"}
            </h4>
          </div>
          <div>
            <h4>Digital House</h4>
            <ul>
              <li className={globalStyles.text}>
                {language === "en"
                  ? "This year, I began this certificate program to enhance my existing Frontend skills."
                  : "Este año, comencé este certificado para mejorar mis habilidades actuales como frontend."}
              </li>
              <li className={globalStyles.text}>
                {language === "en"
                  ? <>I aimed to acquire new skills, such as <b>Redux</b>, <b>TypeScript</b>, <b>MySQL</b>, <b>Power BI</b>, and <b>Styled Components</b>, among other technologies.</>
                  : <>Mi objetivo es adquirir nuevas habilidades, como <b>Redux</b>, <b>TypeScript</b>, <b>MySQL</b>, <b>Power BI</b>, y <b>Styled Components</b>, entre otras tecnologías.</>}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.educationContainer}>
          <div>
            <h3 className={globalStyles.subtitle}>
              {language === "en"
                ? "Bachelors degree on Multimedia Technology"
                : "Licenciatura en Tecnología Multimedia"}
            </h3>
            <h4>
              {language === "en"
                ? "March 2020 - November 2023"
                : "Marzo 2020 - Noviembre 2023"}
            </h4>
          </div>
          <div>
            <h4>
              {language === "en"
                ? "Maimonides University"
                : "Universidad Maimonides"}
            </h4>
            <ul>
              <li className={globalStyles.text}>
                {language === "en"
                  ? <>During the 4 years of this bachelor&apos;s degree, I gained knowledge primarily in <b>designing and programming responsive websites</b>.</>
                  : <>Durante los 4 años de esta licenciatura, adquirí conocimientos principalmente en <b>diseño y programación de sitios web responsivos</b>.</>}
              </li>
              <li className={globalStyles.text}>
                {language === "en"
                  ? <>I utilized tools such as <b>VSCode</b>, <b>GitHub</b>, <b>Trello</b>, <b>Jira</b>, <b>Figma</b>, and <b>Adobe software</b> (Illustrator, Photoshop, and XD).</>
                  : <>Utilicé herramientas como <b>VSCode</b>, <b>GitHub</b>, <b>Trello</b>, <b>Jira</b>, <b>Figma</b>, y <b>software de Adobe</b> (Illustrator, Photoshop y XD).</>}
              </li>
              <li className={globalStyles.text}>
                {language === "en"
                  ? <>Additionally, I worked with frameworks like <b>React</b> and <b>Next.js</b>.</>
                  : <>Además, trabajé con frameworks como <b>React</b> y <b>Next.js</b>.</>}
              </li>
              <li className={globalStyles.text}>
                {language === "en"
                  ? <>I also learned programming languages such as <b>HTML5</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>C#</b>.</>
                  : <>También aprendí lenguajes de programación como <b>HTML5</b>, <b>CSS</b>, <b>JavaScript</b>, y <b>C#</b>.</>}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;
