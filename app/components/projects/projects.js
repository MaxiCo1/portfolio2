"use client";
import React from "react";
import styles from "./projects.module.css";
import globalStyles from "../../styles/global.module.css";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

const projects = ({ id }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { language } = useLanguage();
  return (
    <section
      className={`${globalStyles.container} ${styles.container}`}
      id={id}
    >
      <h2 className={globalStyles.title}>Portfolio</h2>
      <p className={`${globalStyles.text} ${styles.sectionDescription}`}>
        {language === "en"
          ? "Here, I’ll show you some of my projects where I apply the different skills I’ve acquired as a student. Some projects may include skills not previously mentioned. Please note that most projects are in Spanish, as it’s my native language"
          : "Aquí mostraré algunos de mis proyectos donde aplico las distintas habilidades que he adquirido como estudiante. Es posible que algunos proyectos incluyan habilidades no mencionadas anteriormente."}
      </p>
      <div className={styles.allProjectsContainer}>
        <div
          className={`${styles.projectLargeContainer} ${styles.hoverContainer}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/bonsai.jpg"
              alt="Ecommerce"
              width={800}
              height={600}
              className={styles.centeredImage}
            />
          </div>
          <div className={`${styles.insideContainer} ${styles.hiddenContent}`}>
            <h3>E-Commerce</h3>
            <p>
              {language === "en"
                ? "This was a group project in which we had to create an e-commerce site, in this case, for selling bonsais. We created four pages: Home, About, Cart, and Products, where users could view different bonsais, see their prices, and filter them. Users could select a quantity of a product, purchase it, and save or remove it from the cart. We used React and Next.js, with a Firebase database and context to access the database data easily."
                : "Este fue un proyecto grupal en el que tuvimos que crear un sitio de comercio electrónico, en este caso, para la venta de bonsáis. Creamos cuatro páginas: Inicio, Sobre Nosotros, Carrito y Productos, donde los usuarios podían ver los diferentes bonsáis, sus precios y filtrarlos. Los usuarios podían seleccionar una cantidad de un producto, comprarlo y guardarlo o eliminarlo del carrito. Usamos React y Next.js, con una base de datos en Firebase y contexto para acceder fácilmente a los datos de la base de datos."}
            </p>
            <div className={styles.logoContainer}>
              <a
                className={styles.logo}
                href="https://github.com/papuzinH/buensai.git"
              >
                Github
              </a>
              <a className={styles.logo} href="http://buensai-vert.vercel.app/">
                Vercel
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.projectContainer} ${styles.hoverContainer}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/rick&morty.jpg"
              alt="Rick and Morty"
              width={800}
              height={600}
              className={styles.centeredImage}
            />
          </div>
          <div className={`${styles.insideContainer} ${styles.hiddenContent}`}>
            <h3>Rick & Morty API</h3>
            <p>
              {language === "en"
                ? "This was one of my first projects, where I created a website for the 'Rick & Morty API.' Here, I used Axios for the API requests and Bulma for styling. It’s a simple website where you can search for characters and view small cards with some information about them."
                : "Este fue uno de mis primeros proyectos, donde creé un sitio web para la 'Rick & Morty API.' Aquí utilicé Axios para las solicitudes de la API y Bulma para los estilos. Es una web simple donde puedes buscar personajes y ver pequeñas tarjetas con información sobre ellos."}
            </p>
            <div className={styles.logoContainer}>
              <a
                className={styles.logo}
                href="https://github.com/MaxiCo1/rick-morty.git"
              >
                Github
              </a>
              <a
                className={styles.logo}
                href="http://rick-morty-umber.vercel.app/"
              >
                Vercel
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.projectContainer} ${styles.hoverContainer}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/thisPortfolio.png"
              alt="runner"
              width={800}
              height={600}
              className={styles.centeredImage}
            />
          </div>
          <div className={`${styles.insideContainer} ${styles.hiddenContent}`}>
            <h3>{language === "en" ? "This website" : "Este sitio web"}</h3>
            <p>
              {language === "en"
                ? "Here, you’ll find the link to this website’s GitHub."
                : "Aquí encontrarás el enlace al GitHub de este sitio web."}
            </p>
            <div className={styles.logoContainer}>
              <a
                className={styles.logo}
                href="https://github.com/MaxiCo1/portfolio2.git"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.projectContainer} ${styles.hoverContainer}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/runner.png"
              alt="runner"
              width={800}
              height={600}
              className={styles.centeredImage}
            />
          </div>
          <div className={`${styles.insideContainer} ${styles.hiddenContent}`}>
            <h3>{language === "en" ? "Runner Game" : "Juego de correr"}</h3>
            <p>
              {language === "en"
                ? "During this project, a friend and I programmed a runner game in C# using Unity. The player constantly runs on an endless map where they can only jump to avoid spikes. There are two possible power-ups: invincibility and healing."
                : "Durante este proyecto, junto a una amiga, programamos un juego de correr en C# usando Unity. El jugador corre constantemente en un mapa infinito donde solo puede saltar para evitar pinches. Hay dos posibles potenciadores: invencibilidad y curación."}
            </p>
            <div className={styles.logoContainer}>
              <a
                className={styles.logo}
                href="https://github.com/cdejtiar/runnerDinoUnity.git"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.projectContainer} ${styles.hoverContainer}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/firstPortfolio.png"
              alt="runner"
              width={800}
              height={600}
              className={styles.centeredImage}
            />
          </div>
          <div className={`${styles.insideContainer} ${styles.hiddenContent}`}>
            <h3>
              {language === "en" ? "First Portfolio" : "Primer Portfolio"}
            </h3>
            <p>
              {language === "en"
                ? "This was my first portfolio attempt, where I used a JSON file as a database for all projects and information in both English and Spanish, allowing me to create a sort of ´translator´. I used context to access this database from anywhere in the project. All of this was done using React and Next.js"
                : "Este fue mi primer intento de portafolio, donde utilicé un archivo JSON como base de datos para todos los proyectos e información en inglés y español, lo que me permitió crear una especie de 'traductor'. Utilicé el contexto para acceder a esta base de datos desde cualquier parte del proyecto. Todo esto fue hecho usando React y Next.js."}
            </p>
            <div className={styles.logoContainer}>
              <a
                className={styles.logo}
                href="https://github.com/MaxiCo1/portfolio.git"
              >
                Github
              </a>
              <a
                className={styles.logo}
                href="https://portfolio-maxico1s-projects.vercel.app/"
              >
                Vercel
              </a>
            </div>
          </div>
        </div>
        <div
          className={`${styles.projectLargeContainer} ${styles.hoverContainer}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/twitter-clone.jpg"
              alt="socialNetwork"
              width={800}
              height={600}
              className={styles.centeredImage}
            />
          </div>
          <div className={`${styles.insideContainer} ${styles.hiddenContent}`}>
            <h3>Social Network</h3>
            <p>
              {language === "en"
                ? "Throughout this project, developed during the Next.js unit of the Frontend Certificate course at Digital House, I created a social network similar to Twitter/X using a backend specifically provided for this unit. In this project, I learned to make effective API calls, implementing GET and POST methods that enable users to interact with the interface in a smooth and realistic manner.The features developed include user login, user registration, posting messages, replying to messages, and logging out. Additionally, I used temporary cookies to manage login verification and user creation, ensuring secure and efficient session handling."
                : "A lo largo de este proyecto, desarrollado en la unidad de Next.js del curso de Certificado Frontend de Digital House, creé una red social similar a Twitter/X, utilizando un backend proporcionado específicamente para la unidad. En este proyecto, aprendí a realizar llamados a la API de manera efectiva, implementando métodos GET y POST que permiten al usuario interactuar con la interfaz de una forma fluida y realista. Las funcionalidades desarrolladas incluyen inicio de sesión, registro de usuario, publicación de mensajes, respuesta a mensajes y cierre de sesión. Además, utilicé cookies temporales para gestionar la verificación de inicio de sesión y la creación de usuarios, garantizando un manejo seguro y eficiente de las sesiones. "}
            </p>
            <div className={styles.logoContainer}>
              <a
                className={styles.logo}
                href="https://github.com/MaxiCo1/Social-Network.git"
              >
                Github
              </a>
            </div>
          </div>
        </div>

        <div className={styles.comingSoonContainer}>
          <p>COMING</p>
          <Image
            src={"/images/loading.gif"}
            height={150}
            width={150}
            alt="coming soon"
          />
          <p>SOON</p>
        </div>
      </div>
    </section>
  );
};

export default projects;
