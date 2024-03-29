import { useState } from 'react'
import "./ContactBrowser.css";
import { contactForm } from "../firebase";
import { doc, setDoc } from "firebase/firestore"; 

const ContactBrowser = () => {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("") 
  

  const submitForm = () => {
    setDoc(doc(contactForm), {
      name: name,
      email: email,
      message: message
    });

    setName("")
    setEmail("")
    setMessage("")
  } 

  return (
    <div className="ContactBrowser">
      <div className="ContactBrowser__header">
        <div className="ContactBrowser__header__text">
          localhost:3000/<span className="blinker"> |</span>
        </div>
      </div>

      <div className="ContactBrowser__body">
        <div className="ContactBrowser__body__header">
          Have something to say? <span>Get in touch.</span>
        </div>
        <div className="ContactBrowser__body__form">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <button onClick={() => submitForm()}>
            Send{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactBrowser;
