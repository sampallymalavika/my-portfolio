import React from "react";
import image from "../assets/R.jpg";
import image1 from "../assets/Education-Logo.png";
import image2 from "../assets/outlined_rounded_button_tick-512.webp";
import image3 from "../assets/arrow.jpg"

const Experience = () => {
  return (
    <>
      <div id = "Experi">
        <h1 className="get-to">Get To Know More About Me...</h1>

        <div className="card">
          <img className="card-image" src={image}></img>
          <h2>Experience</h2>
          <p>2+ years Frontend Development </p>
        </div>
        <div className="card1">
          <img className="card-image1" src={image1}></img>
          <h2>Education</h2>
          <p>Bachelor of Technology (ECE), 2021 </p>
        </div>
        <div className="experience">
          <ul className="experience-ul">
            Senior Systems Engineer- Infosys Limited
          </ul>
          <li>
            Specialized in managing Azure services, focusing on search index and
            storage solutions to optimize data retrieval and storage processes
          </li>
          <li>
            Developed and designed numerous web pages using Kentico,
            contributing to the overall user experience.
          </li>
          <li>
            Successfully implemented Google Tag Manager(GTM) and DataLayer for
            40+ applications, improving tracking and analytics capabilities.
          </li>
          <li>
            Played a pivotal role in identifying and resolving issues within
            CI/CD pipelines, ensuring seamless development and deployment
            processes.
          </li>
          <li>
            Handled React JS and JavaScript applications, fixed functionality
            issues and also added new functionality for applications.
          </li>
          <li>
            Contributed to the development of best practices and provided
            mentorship to junior team members.
          </li>
        </div>
        <h2 className="explore">Explore My Experience</h2>
        <div className="card2" id = "skills">
          <h2>Frontend Development</h2>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>HTML
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>CSS
            </p>
          </div>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>JavaScript
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>ReactJS
            </p>
          </div>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>TypeScript
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>NextJS
            </p>
          </div>
        </div>
        <div className="card3">
          <h2>Backend Development</h2>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>PostgreSQL
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>NodeJS
            </p>
          </div>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>Git
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>Kentico
            </p>
          </div>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>GitHub
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>VS Code
            </p>
          </div>
        </div>
        <div className="card4">
          <h2>Cloud Services</h2>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>Azure
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>GCP
            </p>
          </div>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>Azure Search
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>CI/CD Pipelines
            </p>
          </div>
          <div className="skill">
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>Azure DevOps
            </p>
            <p className="tick-ptag">
              <img className="tick" src={image2}></img>GitHub Actions
            </p>
              
          </div>
        </div>
       
      </div>
    </>
  );
};
export default Experience;
