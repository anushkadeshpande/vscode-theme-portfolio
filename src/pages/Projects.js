import { useContext } from 'react' 
import './Projects.css'
import ProjectsList from '../components/ProjectsList'
import TabBar from "../components/TabBar";
import ProjectsPage from '../components/ProjectsPage';
import ProjectContext from "../context/Project/ProjectContext";

const Projects = () => {
    const projectData = useContext(ProjectContext)
    return (
        <div className="Projects">

            <div className={JSON.stringify(projectData.project) !== '{}'? "Projects__list Projects__list_mobileView" : "Projects__list"}>
                <ProjectsList />
            </div>
            <div className={JSON.stringify(projectData.project) !== '{}'? "Projects__page Projects__page_mobileView" : "Projects__page"}>
                {JSON.stringify(projectData.project) !== '{}'? 
                <ProjectsPage />
            : <h1 className="no_open_project">Select a project from the list to learn more 👩🏻‍💻</h1>}
            </div>

        </div>
    )
}

export default Projects;