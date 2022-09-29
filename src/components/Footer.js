import "./Footer.css";
import { ReactComponent as Github } from '../assets/footer/logo-github.svg'
import { ReactComponent as Linkedin } from '../assets/footer/logo-linkedin.svg'
import { ReactComponent as Instagram } from '../assets/footer/logo-instagram.svg'
import { ReactComponent as Twitter } from '../assets/footer/logo-twitter.svg'

const Footer = () => {
  return (
    <div className="Footer">
    <div className="Footer__logos">
    <Github />
    <Linkedin />
    <Instagram />
    <Twitter />
    </div>
        </div>
  );
};

export default Footer;
