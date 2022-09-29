import "./Home.css";
import TabBar from '../components/TabBar'

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
                <a>Placeholder...</a>
              </li>

              <li>
                <a>Placeholder...</a>
              </li>

              <li>
                <a>Placeholder...</a>
              </li>
            </ul>
          </div>

          <div className="Home__content__lhs__section">
            <h3>Recent</h3>
            <ul>
              <li>
                <a>Placeholder...</a>
                <p>A:\\Path\to\something</p>
              </li>

              <li>
                <a>Placeholder...</a>
                <p>A:\\Path\to\something</p>
              </li>

              <li>
                <a>Placeholder...</a>
                <p>A:\\Path\to\something</p>
              </li>
            </ul>
          </div>

          <div className="Home__content__lhs__section">
            <h3>Help</h3>
            <ul>
              <li>
                <a>Placeholder...</a>
              </li>

              <li>
                <a>Placeholder...</a>
              </li>

              <li>
                <a>Placeholder...</a>
              </li>
            </ul>
          </div>

        </div>


        <div className="Home__content__rhs">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="#">
                <div className="list_item_header">This is something</div>
                <div className="list_item_description">This is the description to the above something. Got it?</div>
                </a>
            </li>

            <li><a href="#">
                <div className="list_item_header">This is something</div>
                <div className="list_item_description">This is the description to the above something. Got it?</div>
                </a>
            </li>

            <li><a href="#">
                <div className="list_item_header">This is something</div>
                <div className="list_item_description">This is the description to the above something. Got it?</div>
                </a>
            </li>

            <li><a href="#">
                <div className="list_item_header">This is something</div>
                <div className="list_item_description">This is the description to the above something. Got it?</div>
                </a>
            </li>

        </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
