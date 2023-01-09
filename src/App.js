import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectState from "./context/Project/ProjectState";

function App() {
  return (
    <ProjectState>
    <div className="App">
      <Header />
      <div className="App__Main">
        <Router>
          <Menu />
          <Main />
        </Router>
      </div>
      <Footer />
    </div>
    </ProjectState>
  );
}

export default App;
