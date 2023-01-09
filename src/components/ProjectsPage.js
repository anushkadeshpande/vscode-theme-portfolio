import {useContext, useState} from "react";
import "./ProjectsPage.css";
import TabBar from "./TabBar";
import Logo from "../assets/logo.svg";
import ProjectContext from "../context/Project/ProjectContext";

const ProjectsPage = ({ id }) => {

  const projectData = useContext(ProjectContext)
  console.log(projectData.project)
  if(id!=="") {
  return (
    <div className="ProjectsPage">
      <div className="ProjectsPage__header">
        <TabBar tabName={id} />
      </div>

      <div className="ProjectsPage__body">
        <div className="ProjectsPage__body__header">
          <img src={Logo} />

          <div className="header_content">
            <h1>
              {projectData.project.Name}
            </h1>

            <p>
              {projectData.project.Description}
            </p>

            <div className="header__buttons" >
              <button style={projectData.project == {}?{display:"none !important"}:{}}>Try</button>
              <button style={projectData.project == {}?{display:"none !important"}:{}}>Code</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
  }
  else {
    return(
      <></>
    )
  }
};


export default ProjectsPage;
