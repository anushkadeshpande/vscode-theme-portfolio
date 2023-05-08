import {useContext, useState} from "react";
import "./ProjectsPage.css";
import TabBar from "./TabBar";
import Logo from "../assets/logo.svg";
import ProjectContext from "../context/Project/ProjectContext";

const ProjectsPage = () => {

  const projectData = useContext(ProjectContext)
  // console.log(projectData.project.Name)
  
  return (
    <div className="ProjectsPage">
      <div className="ProjectsPage__header">
        <TabBar tabName={projectData.project.Name} logo={projectData.project.logo} />
      </div>

      <div className="ProjectsPage__body">
        <div className="ProjectsPage__body__header">
          <img src={projectData.project.logo} />

          <div className="header_content">
            <h1>
              {projectData.project.Name}
            </h1>

            <p>
              {projectData.project.Intro}
            </p>

            <div className="header__buttons" >
              <a href={projectData.project.URL} target="_blank"><button>Try</button></a>
              <a href={projectData.project.source} target="_blank"><button>Code</button></a>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
  
};


export default ProjectsPage;
