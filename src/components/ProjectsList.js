import { getDocs } from "firebase/firestore";
import { useState, useEffect, createContext } from "react";
import "./ProjectsList.css";
import { projectsCollection } from "../firebase";

import ProjectsListItem from "./ProjectsListItem";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getDocs(projectsCollection).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setProjects(newData);
      // console.log(newData);
    });
  }, []);

  return (
    <div className="ProjectsList">
      <div className="ProjectsList__title">PROJECTS</div>
      <div className="ProjectsList__list">
        <div className="ProjectsList__list__item">
          {projects?.map((data, key) => (
            <ProjectsListItem
              data={data}
              key={key}
              onClick={(data) => {
                createContext(data);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
