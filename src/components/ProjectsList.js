import { getDocs } from "firebase/firestore";
import { useState, useEffect, createContext } from 'react'
import './ProjectsList.css'
import {projectsCollection, blogsCollection} from '../firebase'

import ProjectsListItem from './ProjectsListItem'

const ProjectsList = () => {
    const [ projects, setProjects ] = useState([])
    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
            getDocs(projectsCollection)
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));  
                    
                    setProjects(newData)
            })

            getDocs(blogsCollection)
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));  
                    
                    setBlogs(newData)
            })
    }, [])

    return (
        <div className="ProjectsList">
            <div className="ProjectsList__title">PROJECTS</div>
            <div className="ProjectsList__list">
                <div className="ProjectsList__list__item">
                    {
                        projects?.map((data, key) => <ProjectsListItem data={data} key={key} onClick={(data) => {createContext(data)}}/>)
                    }
                </div>
            </div>

            <div className="Blog__list">
            <div className="BlogsList__title">BLOGS</div>
            <div className="BlogsList__list">
                {
                    blogs?.map((data, key) => <a href={data.URL} target="_blank" className="BlogList__list__item">
                        {data?.Name}
                    </a>)
                }
            </div>
            
            </div>

        </div>
    )
}

export default ProjectsList;