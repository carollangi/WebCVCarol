import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function About() {
  return (
    <section id="about">
        <div className="wrapper">
            <h3>About</h3>
            <p>Hello, Im Carolina Pears Pamela Langi!</p>
            <p>Im 17years old and a student of Computer Science Faculty majoring Information system</p>
            <p>in Universitas Klabat.</p>
            <h4>Programming language & Tools</h4>
            <div className="skills">
                <FaHtml5 /><FaPython /><FaReact /><FaGithub /><FaCss3Alt /><SiFirebase /><IoLogoJavascript />
            </div>
        </div>
    </section>
  )
}

export default About