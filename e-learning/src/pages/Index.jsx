import '../index.css';
import '../App.css';
import '../componentsRoot/rootLayout.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Ad180 from "../components/Ad180";
import Admin from "../components/admin";
import User from "../components/User";
import Teacher from "../components/Teacher";


function Index() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");
    const loggedIn = !!role;

    useEffect(() => {
        if (!loggedIn) {
            navigate("/login");
        }
    }, [loggedIn, navigate]);


    let content;
    switch (role) {
        case "180":
            content = <Ad180 />;
            break;
        case "admin":
            content = <Admin />;
            break;
        case "user":
            content = <User />;
            break;
        case "teacher":
            content = <Teacher />;
            break;
        default:
            content = null;
    }


    return (
        <>

            {loggedIn ? content : null}

        </>
    );
}

export default Index;