import "./TabBar.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Logo from "../assets/logo.svg";
import CSSLogo from "../assets/css3.svg";
import ProjectContext from "../context/Project/ProjectContext";

const TabBar = ({ tabName, logo }) => {
  const currentTab = useLocation().pathname;

  const [currentData, setCurrentData] = useState({});
  const projectData = useContext(ProjectContext)

  useEffect(() => {
    if (tabName === "Home") setCurrentData({ Logo: Logo, TabHead: "Me" });
    else if (tabName === "Contact")
      setCurrentData({ Logo: CSSLogo, TabHead: "Contact.css" });
    else if (tabName === "Live Preview")
      setCurrentData({ Logo: Logo, TabHead: tabName });
    else
      setCurrentData({ Logo: logo, TabHead: tabName, showCloseButton: true });
  }, [currentTab, tabName]);

  const closeTab = () => {
    projectData.updateState({})
  }

  return (
    <div className="TabBar">
      <div className="TabBar__activeTab">
        <img
          src={currentData?.Logo}
          style={{ height: "20px", width: "20px" }}
        />
        {/* {currentTab === '/'? 'Me' :
                currentTab === '/projects'? 'Projects' :
                currentTab === '/about' ? 'About' : 'Contact'} */}
        <p> {currentData?.TabHead}</p>
        {currentData?.showCloseButton ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            onClick={() => closeTab()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TabBar;
