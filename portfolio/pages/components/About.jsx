import React from "react"
import NavBar from "./NavBar"
import styles from "../../styles/About.module.css"

const About = () => {
  return (
    <div>
      <NavBar/>
      <div className={styles.aboutContainer}>
        <h2 className={styles.header}>This is the about page</h2>
        <p className={styles.paragraph}>Devin Hight originally from New Mexico, moved to San Francisco to live his culinary dreams.
  In 2012- After years of working in some of the best restaurants in San Francisco, New York and Los Angeles (where he found his love for the simple poke bowl) 
  he moved to Las Vegas and started his Poke Pop-Up in local breweries and bars.
  He eventually took a 4 year break from the kitchen to bartend at some of Las Vegas's best and most historical bars.</p>
      </div>
    </div>

  )
};

export default About;