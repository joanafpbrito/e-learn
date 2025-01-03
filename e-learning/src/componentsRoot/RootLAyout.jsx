import { Outlet } from "react-router-dom";
import './rootLayout.css';
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout () {
    return (
        <>
        
            <Header/>
            <SideBar/>
            <div className="main-content"> <Outlet /> </div>
            <Footer/>
        </>
        
    )
}

export default RootLayout;