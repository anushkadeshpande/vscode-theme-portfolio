import { useContext } from "react";
import "./ProjectsListItem.css";
import Logo from "../assets/logo.svg";
import ProjectContext from "../context/Project/ProjectContext";

const ProjectsListItem = ({ data }) => {
  const projectData = useContext(ProjectContext);
  return (
    <div className="ProjectsListItem">
      <img src={data.logo} />
      <span>
        <div className="project_details">
          <h4>{data.Name}</h4>
          <h5>{data.Description}</h5>
        </div>

        <button onClick={() => projectData.updateState(data)}>Open</button>
      </span>
    </div>
  );
};

export default ProjectsListItem;
