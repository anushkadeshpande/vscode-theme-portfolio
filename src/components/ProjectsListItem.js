import './ProjectsListItem.css'
import Logo from '../assets/logo.svg'

const ProjectsListItem = () => {
    return (
        <div className="ProjectsListItem">
            <img src={Logo} />
                    <div className="project_details">
                        <h4>XYZ</h4>
                        <h5>This is the project description. This is the project description. </h5>
                    </div>
                    <button>Open</button>
        </div>
    )
}

export default ProjectsListItem