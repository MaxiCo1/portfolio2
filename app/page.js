import styles from "./page.module.css";
import AboutMe from "./components/aboutMe";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import Footer from "./components/footer";

const ids = {
  home: "home",
  about: "about",
  education: "education",
  experience: "experience",
  projects: "projects",
  contact: "contact"
}

export default function Home() {
  return (
    <main className={styles.globalFont}>
      <NavBar sections={ids} />
      <Header id={ids.home} button={ids.about}/>
      <AboutMe id={ids.about} />
      <Education id={ids.education} />
      <Experience id={ids.experience} />
      <Projects id={ids.projects} />
      <Footer id={ids.contact}/>
    </main>
  );
}
