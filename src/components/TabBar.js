import './TabBar.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
 import Logo from '../assets/logo.svg'
 import CSSLogo from '../assets/css3.svg'

const TabBar = ({tabName, logo}) => {
     const currentTab = useLocation().pathname;

    const [currentData, setCurrentData] = useState({})
    
    useEffect(()=> {
      if(tabName === 'Home') 
        setCurrentData({Logo: Logo, TabHead: "Me"})
      else if(tabName === 'Contact')
        setCurrentData({Logo: CSSLogo, TabHead: "Contact.css"})
      else if(tabName === 'Live Preview')
        setCurrentData({Logo: Logo, TabHead: tabName})
      else 
      setCurrentData({Logo: logo, TabHead: tabName, showCloseButton: true})
    }, [currentTab, tabName])
    
    return(
        <div className="TabBar">
            <div className="TabBar__activeTab">
            <img src={currentData?.Logo} style={{height: "20px", width:"20px"}}/>
                {/* {currentTab === '/'? 'Me' :
                currentTab === '/projects'? 'Projects' :
                currentTab === '/about' ? 'About' : 'Contact'} */}
                {currentData?.TabHead}
            </div>
        </div>
    )
}

export default TabBar;