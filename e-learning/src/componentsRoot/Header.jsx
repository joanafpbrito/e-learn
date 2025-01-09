import '../index.css';

import { Link } from "react-router-dom";
import { useState } from "react";
import logo180black from "../assets/logo180black.png";
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleUserRound } from "react-icons/lu";
import { RiChat3Line } from "react-icons/ri";
import Chat from "../components/Chat";




function Header() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => setIsChatOpen(!isChatOpen);
    
    return (
        <>
            <header className="header">
                <div className="logo"><Link to="/"> <img src={logo180black} alt="" /> </Link></div>
                <nav className="header-icons">
                    <Link to="/"> <LuCircleUserRound /> </Link>
                    <div onClick={toggleChat}> <RiChat3Line size={24} /></div>
                    <Link to="/"> <IoSettingsOutline /> </Link>
                    <Link to="/logout"> <AiOutlineLogout /> </Link>
                </nav>
                {isChatOpen && <Chat/>}
            </header>
        </>
    )
}

export default Header;