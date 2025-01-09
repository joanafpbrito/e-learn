import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout () {

    const navigate = useNavigate();

    useEffect(() => {       
            localStorage.clear();
            setTimeout(() => {
                navigate("/");
            }, 100);
        }, [navigate]);

    return(
        <>
        <p>Até breve...</p>
        </>
    )
}

export default Logout;