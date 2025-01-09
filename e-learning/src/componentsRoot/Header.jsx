import { Link } from "react-router-dom";
import { useState } from "react";
import '../index.css'
import logo180black from "../assets/logo180black.png";
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoMdChatbubbles } from "react-icons/io";
import Chat from "../components/Chat";




function Header() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => setIsChatOpen(!isChatOpen);
    
    return (
        <>
            <header className="header">
                <div className="logo"><Link to="/"> <img src={logo180black} alt="" /> </Link></div>
                <nav className="header-icons">
                    <Link to="/"> <CiUser /> </Link>
                    <Link to="/"> <IoSettingsOutline /> </Link>
                    <Link to="/logout"> <AiOutlineLogout /> </Link>
                    <div onClick={toggleChat}> <IoMdChatbubbles size={24} /></div>
                </nav>
                {isChatOpen && <Chat/>}
            </header>
        </>
    )
}

export default Header;