import {useContext } from 'react'
import './ProjectsListItem.css'
import Logo from '../assets/logo.svg'
import ProjectContext from "../context/Project/ProjectContext";

const ProjectsListItem = ({data}) => {

    const projectData = useContext(ProjectContext)
    return (
        <div className="ProjectsListItem">
            {console.log(data)}
            <img src={Logo} />
                    <div className="project_details">
                        <h4>{data.Name}</h4>
                        <h5>{data.Description}</h5>
                    </div>
                    <button onClick={() => projectData.updateState(data)}>Open</button>
        </div>
    )
}

export default ProjectsListItem