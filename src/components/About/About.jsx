import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { AiFillCalendar } from "react-icons/ai";
import { FcGraduationCap } from "react-icons/fc";



export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/img.webp")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3 className={styles.title}>
                INTRODUCE MYSELF</h3>
                <br></br>
              <p>
                Hi, my name is Arun Kumar and I'm from  Madurai-Tamilnadu
                <br />
                <br />
                As a Full-Stack developer, I enjoy tackling new challenges and continuously expanding my skillset.
                <br />
                <br />

                I am proficient in Javascript, as well as have knowledge in programming languages such as HTML,CSS,Javascript
                <br />
                <br />
                I have a passion for working with Node.js, MongoDB, and modern Javascript libraries and frameworks  like React.js

              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 className={styles.title}>Education</h3>
              <br></br>
              <p>
                2023-2024
                <br />
                Full Stack Developer
                <br />
                GUVI GEEK NETWORK Pvt.Ltd - Chennai.
                <br />
                <br />

                <AiFillCalendar />
                2016-2020
                <br />
                Bachelor Of Engineering-MECH
                <br />
                Rathinam Technical Campus - Coimbatore.
                <br />
                <br />

                <AiFillCalendar />
                2015-2016
                <br />
                Higher Secondary School
                <br />
                P.K.N Higher.Sec.School -Thirumangalam.
                <br />
                <br />


              </p>
            </div>
          </li> */}

        </ul>
      </div>
    </section>
  );
};
