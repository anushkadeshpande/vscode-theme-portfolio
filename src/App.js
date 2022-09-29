import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
