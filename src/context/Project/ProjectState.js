import {useState} from 'react'
import ProjectContext from './ProjectContext'

const ProjectState = (props) => {

    const [project, setProject] = useState({})

    const updateState = (newState) => {
        setProject(newState)
    }

    return (
        <ProjectContext.Provider value={{project, updateState}}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState