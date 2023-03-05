import "./Footer.css";
import { ReactComponent as Github } from '../assets/footer/logo-github.svg'
import { ReactComponent as Linkedin } from '../assets/footer/logo-linkedin.svg'
import { ReactComponent as Instagram } from '../assets/footer/logo-instagram.svg'
import { ReactComponent as Twitter } from '../assets/footer/logo-twitter.svg'

const Footer = () => {
  return (
    <div className="Footer">
    <div className="Footer__logos">
    <a href="https://github.com/anushkadeshpande" target="_blank" style={{height: "20px"}}><Github /></a>
    <a href="https://www.linkedin.com/in/anushka-deshpande-67710a174" target="_blank" style={{height: "20px"}}><Linkedin /></a>
    <a href="https://www.instagram.com/anotherushka/" target="_blank" style={{height: "20px"}}><Instagram /></a>
    <a href="https://twitter.com/anushkaa5000" target="_blank" style={{height: "20px"}}><Twitter /></a>
    </div>
        </div>
  );
};

export default Footer;
