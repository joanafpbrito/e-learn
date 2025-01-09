import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../componentsRoot/Banner";
import RegisterNewUser from "./RegisterNewUser";


function Admin () {
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
                <p  > <strong>Registar Novo Utilizador</strong> </p>
                <br />
                <Link to="/courses">Ver Cursos</Link>
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

export default Admin;