import '../componentsRoot/rootLayout.css'
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

function RootLayout () {
    return (
        <>
        
            <Header/>
            
            <div className="main-content"> <Outlet /> </div>
            <Footer/>
        </>
        
    )
}

export default RootLayout;