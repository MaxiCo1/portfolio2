"use client";
import globalStyles from "../../styles/global.module.css";
import styles from "./allSkills.module.css";
import { useLanguage } from "@/app/context/LanguageContext";

const AllSkills = ({ id }) => {
  const { language } = useLanguage();
  return (
    <section
      className={`${globalStyles.container} ${styles.containerBackground}`}
      id={id}
    >
      <h2 className={globalStyles.title}>
        {language === "en" ? "More skills" : "Mas habilidades"}
      </h2>
      <div className={styles.description}>
        <p className={globalStyles.text}>
          {language === "en"
            ? "Here, I will highlight the different skills used in the development of various portfolio projects."
            : "Aquí destacaré las diferentes habilidades utilizadas en el desarrollo de diversos proyectos del portafolio."}
        </p>
        <div className={styles.circlesContainer}>
          <div className={styles.insideCirclesContainer}>
            <div className={`${styles.begginer} ${styles.circles}`}/>
            <p className={styles.text}>
              {language === "en" ? "Begginer" : "Principiante"}
            </p>
          </div>
          <div className={styles.insideCirclesContainer}>
            <div className={`${styles.intermediate} ${styles.circles}`}/>
            <p className={styles.text}>
              {language === "en" ? "Intermediate" : "Intermedio"}
            </p>
          </div>
          <div className={styles.insideCirclesContainer}>
            <div className={`${styles.advanced} ${styles.circles}`}/>
            <p className={styles.text}>
              {language === "en" ? "Advanced" : "Avanzado"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Typescript</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Tailwind</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Styled components</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>C#</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>MySQL</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Docker</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Firebase</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>{language === "en" ? "Rest API use" : "Uso de Rest API"}</p>
            <div className={`${styles.intermediate} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>{language === "en" ? "UX/UI design" : "Diseño UX/UI"}</p>
            <div className={`${styles.intermediate} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>NPM/Yarn</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Scrum/Kanban</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Unity</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Github</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>PowerBI</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
          <li className={styles.listItem}>
            <p className={globalStyles.text}>Redux</p>
            <div className={`${styles.begginer} ${styles.circles}`} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AllSkills;
