import './ProjectsList.css'

import ProjectsListItem from './ProjectsListItem'

const ProjectsList = () => {
    return (
        <div className="ProjectsList">
            <div className="ProjectsList__title">PROJECTS</div>
            <div className="ProjectsList__list">
                <div className="ProjectsList__list__item">
                    <ProjectsListItem />
                    <ProjectsListItem />
                    <ProjectsListItem />
                </div>
            </div>

        </div>
    )
}

export default ProjectsList;