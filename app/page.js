import styles from "./page.module.css";
import AboutMe from "./components/aboutMe";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Education from "./components/education";
import AllSkills from "./components/allSkills";
import Experience from "./components/experience";
import Footer from "./components/footer";
import NavBarMobile from "./components/navBarMobile";
import Head from "next/head";

const ids = {
  home: "home",
  about: "about",
  education: "education",
  allSkills: "allSkills",
  experience: "experience",
  projects: "projects",
  contact: "contact"
}

export default function Home() {
  return (
    <main className={styles.globalFont}>
      <Head>
        <title>Maxi Coletti - Portfolio</title>
        <meta name="description" content="Maxi Coletti - Personal portfolio" />
      </Head>
      <NavBar sections={ids} />
      <NavBarMobile/>
      <Header id={ids.home} button={ids.about}/>
      <AboutMe id={ids.about} />
      <AllSkills id={ids.allSkills} />
      <Education id={ids.education} />
      <Experience id={ids.experience} />
      <Projects id={ids.projects} />
      <Footer id={ids.contact}/>
    </main>
  );
}
