import './Contact.css'
import ContactBrowser from '../components/ContactBrowser'
import TabBar from "../components/TabBar";

const Contact = () => {
    return(
        <div className="Contact">
        
        <div className="Contact__lhs">
        <TabBar tabName="Contact" />
        <div className="Contact__lhs__content">
            <div className="Contact__lineNumbers">
                {/* {for(let i=1; i<=5; i++) <p>i</p>} */}
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
            </div>
            <div className="Contact__contactInfo">
                <p className="contactInfo__propName"><span style={{fontStyle: 'italic'}}>.contact_info</span>{" {"}</p>
                <p className="contactInfo__props">
                    <span style={{color: " #c1eafa"}}>website:</span> {"'anushkaa5000@gmail.com'"};
                </p>
                <p className="contactInfo__props">
                    <span style={{color: " #c1eafa"}}>email-id:</span> {"'anushkaa5000@gmail.com'"};
                </p>
                <p className="contactInfo__props">
                    <span style={{color: " #c1eafa"}}>github:</span> {"'anushkaa5000@gmail.com'"};
                </p>
                <p className="contactInfo__props">
                    <span style={{color: " #c1eafa"}}>linkedin:</span> {"'anushkaa5000@gmail.com'"};
                </p>
                <p className="contactInfo__props">
                    <span style={{color: " #c1eafa"}}>instagram:</span> {"'anushkaa5000@gmail.com'"};
                </p>
                <p className="contactInfo__props">
                    <span style={{color: " #c1eafa"}}>twitter:</span> {"'anushkaa5000@gmail.com'"};
                </p>
                <p className="contactInfo__propName">{"}"}</p>
            </div>
            </div>
        </div>
            
        <div className="Contact__rhs">
        <TabBar tabName="liveview" />
<ContactBrowser />
    </div>        
        </div>
    )
}

export default Contact;