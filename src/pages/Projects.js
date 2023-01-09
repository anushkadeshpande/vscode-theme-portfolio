import './Projects.css'
import ProjectsList from '../components/ProjectsList'
import TabBar from "../components/TabBar";
import ProjectsPage from '../components/ProjectsPage';

const Projects = () => {
    return (
        <div className="Projects">

            <div className="Projects__list">
                <ProjectsList />
            </div>
            <div className="Projects__page">
                {/* <ProjectsPage id="" /> data has to be picked from firebase */}
                <ProjectsPage id={"Home"}/>
            </div>

        </div>
    )
}

export default Projects;