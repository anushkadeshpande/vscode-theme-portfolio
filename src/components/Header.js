import './Header.css'

const Header = () => {
    return (
        <div className="Header">
        <div className="Header__dots">
            <div className="dot" style={{backgroundColor: "#FF5F57"}}></div>
            <div className="dot" style={{backgroundColor: "#FFBC2F"}}></div>
            <div className="dot" style={{backgroundColor: "#28C840"}}></div>
        </div>
        <div className="Header__title">Anushka</div>
        </div>
    )
}

export default Header;