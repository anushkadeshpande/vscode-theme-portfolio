import { useContext } from 'react' 
import './Projects.css'
import ProjectsList from '../components/ProjectsList'
import TabBar from "../components/TabBar";
import ProjectsPage from '../components/ProjectsPage';
import ProjectContext from "../context/Project/ProjectContext";

const Projects = () => {
    const projectData = useContext(ProjectContext)
    // console.log(projectData)
    return (
        <div className="Projects">

            <div className="Projects__list">
                <ProjectsList />
            </div>
            <div className="Projects__page">
                {/* <ProjectsPage id="" /> data has to be picked from firebase */}
                {JSON.stringify(projectData.project) !== '{}'? 
                <ProjectsPage />
            : <h1>Select a project</h1>}
            </div>

        </div>
    )
}

export default Projects;