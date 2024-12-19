import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout () {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();

        navigate ("/");
    }, [navigate]);

    return (
        <div>
            Goodbye!
        </div>
    )
}

export default Logout;