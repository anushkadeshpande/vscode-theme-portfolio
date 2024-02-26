import TabBar from "../components/TabBar";
import "./About.css";
import { technologyData as data } from "../data/data";
import TechnologyCard from "../components/TechnologyCard";
import { Link, Route } from "react-router-dom";



const About = () => {
    const getVersion = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        var month = "";
        switch (mm) {
          case "01":
            month = "January";
            break;
          case "02":
            month = "February";
            break;
          case "03":
            month = "March";
            break;
          case "04":
            month = "April";
            break;
          case "05":
            month = "May";
            break;
          case "06":
            month = "June";
            break;
          case "07":
            month = "July";
            break;
          case "08":
            month = "August";
            break;
          case "09":
            month = "September";
            break;
          case "10":
            month = "October";
            break;
          case "11":
            month = "November";
            break;
          case "12":
            month = "December";
            break;
        }
      
        return month + " " + yyyy;
    }

    return (
    <div className="About">
      <TabBar tabName="Release Notes" />

      <div className="About__content">
        <div className="About__content__header">
          Anushka Deshpande
          <hr />
        </div>

        <div className="About__content__body">
          <div>
            Welcome to the {getVersion()} release of Anushka. There
            are many updates in this version that I hope you'll like, some of
            the key highlights include:
            <ul>
                <li>
                    <a href="#workExpSection">Work Experience</a>
                </li>
                
                <li>
                    <a href="#educationSection">Education</a>
                </li>
                <li>
                    <a href="#internshipSection">Internship</a>
                </li>
                <li>
                    <a href="#technologySection">Technologies worked on</a>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/activities">Other Activities</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
          </div>

          <div className="About__section">
            <p className="About__section__head" id="workExpSection">Work Experience</p>
            <p style={{fontSize:"20px", marginTop: "20px", fontWeight: 400}}><img src="https://companieslogo.com/img/orig/ORCL-d5a587ae.png?t=1633210264" style={{height: "15px", marginRight: "10px"}} />Oracle Financial Services Software  -  <span style={{color:"#b1b1b1", fontWeight: 200}}>Associate Consultant</span></p>
            <p style={{fontSize: "15px"}}>July, 2022 - Present</p>
            <p style={{fontSize: "18px", color: "#a2a2a2", visibility: "hidden"}}>Worked on technologies like Spring Boot, Oracle DB, Java</p>
          </div>

          <div className="About__section">
            <p className="About__section__head" id="educationSection">Education</p>
            <p style={{fontSize:"20px", marginTop: "20px", fontWeight: 400}}>Bachlor of Engineering  -  <span style={{color:"#b1b1b1", fontWeight: 200}}>Information Technology</span></p>
            <p style={{fontSize: "15px"}}>2018 - 2022</p>
          </div>

          <div className="About__section">
            <p className="About__section__head" id="internshipSection">Internship</p>
            <p style={{fontSize:"20px", marginTop: "20px", fontWeight: 400}}><img src="https://portal.coepvlab.ac.in/InTechOlympiad/resource/images/ITO-LOGO.png" style={{height: "15px", marginRight: "10px"}} />InTech Olympiad</p>
            <p style={{fontSize: "15px"}}>May 2020 - July 2020</p>
            <p style={{fontSize: "16px", color: "#a2a2a2", marginTop: "10px"}}>Worked on ideation and mobile app UI designing and wireframing</p>
          </div>
          
          <div className="About__section">
            <p className="About__section__head" id="technologySection">Technologies Worked on</p>
            <div className="technologyCards">
                {data.map(dataItem => 
                    <TechnologyCard data={dataItem} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
