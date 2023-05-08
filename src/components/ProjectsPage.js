import {useContext, useState, useEffect, useRef} from "react";
import "./ProjectsPage.css";
import TabBar from "./TabBar";
import Logo from "../assets/logo.svg";
import ProjectContext from "../context/Project/ProjectContext";

const ProjectsPage = () => {

  const projectData = useContext(ProjectContext)
  const contentRef = useRef()
  // const [formattedData, setFormattedData]
  // useEffect()
  // console.log(projectData.project.Name)
  useEffect(
  () => {
    let desc = ""
    console.log(projectData?.project?.Description.length)
    for(let i=0; i<projectData?.project?.Description.length; i++)
    { 
      // bold the string
      if(projectData?.project?.Description[i] === '*') {
        i ++
        // while another * is not encountered 
        // add the chars to bold string
        // add closing strong tag
        let boldPart = ""
        while(projectData?.project?.Description[i] !== '*') {
          boldPart += projectData?.project?.Description[i]
          i++
        }
        desc += `<strong>
        ${boldPart}
        </strong>`
      }

      // check for headings
      else if(projectData?.project?.Description[i] === '#')
      {
        i ++
        // while another # is not encountered 
        // add the chars to bold string
        // add closing strong tag
        let boldPart = ""
        while(projectData?.project?.Description[i] !== '#') {
          boldPart += projectData?.project?.Description[i]
          i++
        }
        desc += `<h1>
        ${boldPart}
        </h1>`
      }

      // check for images
      else if(projectData?.project?.Description[i] === '$')
      {
        i ++
        i ++
        // while another # is not encountered 
        // add the chars to bold string
        // add closing strong tag
        let imgUrl = ""
        let height = ''
        let width = ''
        while(projectData?.project?.Description[i] !== ')') {
          if (projectData?.project?.Description[i] === ',') {
            i++
            while(projectData?.project?.Description[i] !== ',') {
              height += projectData?.project?.Description[i]
              i++
            }
            i++
            while(projectData?.project?.Description[i] !== ')') {
              width += projectData?.project?.Description[i]
              i++
            }
            break
          }
          imgUrl += projectData?.project?.Description[i]
          i++
        }
        desc += `<img src=${imgUrl} style="height: ${height}px;width: ${width}px"/>`
      }

      else 
        desc += projectData?.project?.Description[i]
    }
    console.log(contentRef.current)
    // return desc
    if(contentRef.current)
    contentRef.current.innerHTML = desc
    
  }
  , [contentRef.current, projectData])

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

        <div className="ProjectsPage__body__content" ref={contentRef}>

        </div>
      </div>
    </div>
  );
  
};


export default ProjectsPage;
