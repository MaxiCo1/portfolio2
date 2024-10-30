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
            <p className={globalStyles.text}>
              {language === "en"
                ? "This year I started with this certificate to improve my skills and acquire new ones such as Redux, Typescript, MySQL, PowerBI and Styled components, among others"
                : "Este año comencé con este certificado para mejorar mis habilidades y adquirir nuevas como Redux, Typescript, MySQL, PowerBI y Styled components, entre otros."}
            </p>
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
            <p className={globalStyles.text}>
              {language === "en"
                ? "In the 4 years of this bachelors degree, from which I still have my thesis pending, i´ve learned mostly to design and program responsive websites using tools such as VScode, Github, Trello, Jira, Figma, Adobe (Illustrator, Photoshop and XD), React and Next.js. Also i´ve learned languages such as HTML5, CSS, Javascript and C#"
                : "En los 4 años de esta licenciatura, de la cual aún tengo mi tesis pendiente, he aprendido principalmente a diseñar y programar sitios web utilizando herramientas como VScode, Github, Trello, Jira, Figma, Adobe (Illustrator, Photoshop y XD), React y Next.js. También he aprendido lenguajes como HTML5, CSS, Javascript y C#."}
            </p>
          </div>
        </div>
        <div className={styles.educationContainer}>
          <div>
            <h3 className={globalStyles.subtitle}>
              {language === "en"
                ? "Bachelor of Arts in literature"
                : "Bachiller en Arte - Literatura"}
            </h3>
            <h4>
              {language === "en"
                ? "February 2013 - November 2018"
                : "Febrero 2013 - Noviembre 2018"}
            </h4>
          </div>

          <div>
            <h4>
            {language === "en"
                ? "Northlands School"
                : "Colegio Northlands"}
              </h4>
            <p className={globalStyles.text}>
            {language === "en"
                ? "Through this years of highschool I had a IGCSE and IB education. Most subjects where in english, having at least 6 years writing and speaking english."
                : "Durante estos años de secundaria tuve una educación IGCSE e IB. La mayoría de las materias fueron en inglés, teniendo al menos 6 años escribiendo y hablando ingles."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;
