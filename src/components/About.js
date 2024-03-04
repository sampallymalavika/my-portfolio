import React from "react";
import Logo from "../assets/updated.jpg";
import logo1 from "../assets/linkedin.jpg";
import logo2 from "../assets/github_git_hub_logo_icon_132878.png";

const About = () => {
  const resume = () => {
    console.log("hello");
  };
  return (
    <>
      <img className="picture" src={Logo} alt="Photo of Malavika"></img>
      <div className="about" id = "about">
        <h2 >Hi, I am </h2>
          <h2>Malavika Sampally, Frontend Developer</h2>
        <p>
          Experienced Front-End Developer with an experience of 2.3+ years in
          application development and maintenance with a strong background in
          supporting and optimizing a diverse portfolio of 30+ applications.
          Proficient in JavaScript, React.js, HTML, CSS with IDE tools like VS
          Code Editor and skilled in CMS(Kentico) and Cloud services like Azure,
          GCP used for hosting services and Especially in Azure Search, Azure
          Devops for CI/CD pipelines. Adapt at troubleshooting and
          problem-solving, ensuring seamless operation and performance
          improvements.
        </p>
        <a href="Malavika- Resume.pdf" download="Malavika- Resume.pdf">
          <button className="resume">Check Resume</button>
        </a>
        <a
        href="https://www.linkedin.com/in/sampally-malavika-bb24b7276"
        target="_blank"
      >
        <img className="github" src={logo1}></img>
      </a>
      <a href="https://github.com/sampallymalavika" target="_blank">
        <img className="linked" src={logo2}></img>
      </a>
      </div>
      
    </>
  );
};
export default About;
