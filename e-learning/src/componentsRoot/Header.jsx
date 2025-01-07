import { Link } from "react-router-dom";
import Logout from "../components/Logout"
import "./rootLayout.css";
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import logo180black from "../assets/logo180black.png";

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo"><Link to="/"> <img src={logo180black} alt="" /> </Link></div>
                <nav className="header-icons">
                    <Link to="/"> <CiUser /> </Link>
                    <Link to="/"> <IoSettingsOutline /> </Link>
                    <a href="/" onClick={() => Logout()}>  <AiOutlineLogout /> </a>
                </nav>
            </header>
        </>
    )
}

export default Header;