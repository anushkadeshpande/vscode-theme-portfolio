import TabBar from "../components/TabBar";
import "./About.css";



const About = () => {
    const getVersion = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        var month = "";
        switch (mm) {
          case "01":
            month = "January";
            break;
          case "02":
            month = "February";
            break;
          case "03":
            month = "March";
            break;
          case "04":
            month = "April";
            break;
          case "05":
            month = "May";
            break;
          case "06":
            month = "June";
            break;
          case "07":
            month = "July";
            break;
          case "08":
            month = "August";
            break;
          case "09":
            month = "September";
            break;
          case "10":
            month = "October";
            break;
          case "11":
            month = "November";
            break;
          case "12":
            month = "December";
            break;
        }
      
        return month + " " + yyyy;
    }
    // console.log(dd, "/", mm, "/", yyyy, "/");
  return (
    <div className="About">
      <TabBar tabName="Release Notes" />

      <div className="About__content">
        <div className="About__content__header">
          Anushka Deshpande
          <hr />
        </div>

        <div className="About__content__body">
          <div>
            Welcome to the {getVersion()} release of Anushka. There
            are many updates in this version that I hope you'll like, some of
            the key highlights include:
            <ul>
                <li>
                
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
