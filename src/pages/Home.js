import "./Home.css";
import TabBar from '../components/TabBar'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <><TabBar tabName="Home" />
    <div className="Home">
      
      <div className="Home__header">
        <h1>Anushka Deshpande</h1>
        <h2>Developer</h2>
      </div>

      <div className="Home__content">
        <div className="Home__content__lhs">
          <div className="Home__content__lhs__section">
            <h3>Start</h3>
            <ul>
              <li>
                <Link to="/about">About Me</Link>
              </li>

              <li>
                <Link to="/projects">My Projects</Link>
              </li>

              <li>
                <a href="https://annkived.web.app/" target="_blank">Other Activities</a>
              </li>
              
              <li>
                <Link to="/contact">Let's chat</Link>
              </li>
            </ul>
          </div>

          <div className="Home__content__lhs__section">
            <h3>Recent</h3>
            <ul>
              <li>
                <a href="https://github.com/anushkadeshpande" target="_blank">Checkout my Github</a>
                <p>github.com/anushkadeshpande</p>
              </li>

              <li>
                <a href="https://instagram-4.web.app" target="_blank">Instagram Clone</a>
                <p>instagram-4.web.app</p>
              </li>
            </ul>
          </div>

          <div className="Home__content__lhs__section">
            <h3>Help</h3>
            <ul>
              <li>
                <Link to="/about">Know More</Link>
              </li>

              <li>
              <Link to="/contact">Contact</Link>
              </li>

            </ul>
          </div>

        </div>


        <div className="Home__content__rhs">
        <h3>Quick Links</h3>
        <ul>
            <li><Link to="/projects">
                <div className="list_item_header">Projects</div>
                <div className="list_item_description">Checkout the projects I've built</div>
                </Link>
            </li>

            <li><a href="https://annkived.web.app/" target="_blank">
                <div className="list_item_header">Archive</div>
                <div className="list_item_description">Enter my annkive!</div>
                </a>
            </li>

            <li><Link to="/projects">
                <div className="list_item_header">Blogs</div>
                <div className="list_item_description">Few blogs I've written</div>
                </Link>
            </li>
        </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
