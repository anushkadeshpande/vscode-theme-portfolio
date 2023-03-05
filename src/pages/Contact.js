import "./Contact.css";
import ContactBrowser from "../components/ContactBrowser";
import TabBar from "../components/TabBar";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact__lhs">
        <TabBar tabName="Contact" />
        <div className="Contact__lhs__content">
          <div className="Contact__contactInfo">
            <p className="contactInfo__propName">
              <span style={{ fontStyle: "italic" }}>
                <span className="lineNo">1</span>.contact_info
              </span>
              {" {"}
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">2</span>
              <p className="contactInfo__props">
                <span style={{ color: " #c1eafa" }}>website:</span>{" "}
                {"'anushkadeshpande.web.app'"};
              </p>
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">3</span>
              <p className="contactInfo__props">
                <span style={{ color: " #c1eafa" }}>email-id:</span>{" "}
                {"'anushkaa5000@gmail.com'"};
              </p>
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">4</span>
              <p className="contactInfo__props">
                <span style={{ color: " #c1eafa" }}>github:</span>{" "}
                {"'github.com/anushkadeshpande'"};
              </p>
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">5</span>
              <p className="contactInfo__props">
                <span style={{ color: " #c1eafa" }}>linkedin:</span>{" "}
                {"'anushkaa5000@gmail.com'"};
              </p>
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">6</span>
              <p className="contactInfo__props">
                <span style={{ color: " #c1eafa" }}>instagram:</span>{" "}
                {"'anushkaa5000@gmail.com'"};
              </p>
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">7</span>
              <p className="contactInfo__props">
                <span style={{ color: " #c1eafa" }}>twitter:</span>{" "}
                {"'anushkaa5000@gmail.com'"};
              </p>
            </p>
            <p style={{ display: "flex" }}>
              <span className="lineNo">8</span>
              <p className="contactInfo__propName">{"}"}</p>
            </p>
          </div>
        </div>
      </div>

      <div className="Contact__rhs">
        <TabBar tabName="Live Preview" />
        <ContactBrowser />
      </div>
    </div>
  );
};

export default Contact;
