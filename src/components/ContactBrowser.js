import './ContactBrowser.css'

const ContactBrowser = () => {
    return(
        <div className="ContactBrowser">
            <div className="ContactBrowser__header">
                <div className="ContactBrowser__header__text">
                    localhost:3000/<span className="blinker"> |</span>
                </div>
            </div>
            <div className="ContactBrowser__body"></div>
        </div>
    )
}

export default ContactBrowser;