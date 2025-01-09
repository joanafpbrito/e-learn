import { useState } from "react";
import Banner from "../componentsRoot/Banner";
import RegisterNewUser from "./RegisterNewUser";
import { Link } from "react-router-dom";


function Ad180 () {
    const userName=localStorage.getItem("name");
    const [banner, setBanner] = useState(true);
    const [newUser, setNewUser] = useState();
    

    function showRegisterNewUser () {
      setNewUser(true);
      setBanner(false);
      setCourseList(false);
    }

    return (
        <>
        <aside className="sidebar">
            <div>
                <p onClick={showRegisterNewUser} > <strong>Registar Novo Utilizador</strong> </p>
                <Link to="/courses">Ver Cursos</Link>
                <br />
                <br />
                <br />
                <br />
                <br /> 
            </div>
        </aside>
        

        {banner && 
            <div>
                <Banner/> 
            </div> 
        }
        {newUser && 
            <div>
                <RegisterNewUser/> 
            </div> 
        }
        
        </>
    )
}


export default Ad180;