import { useState } from "react";
import { useNavigate} from "react-router-dom";
import Banner from "../componentsRoot/Banner";
import RegisterNewUser from "./RegisterNewUser";
import FakeButton from "../componentsRoot/FakeButton";



function Ad180 () {

    const navigate = useNavigate();
    
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
                <br />
                <FakeButton onClick={showRegisterNewUser}> Registar Novo Utilizador </FakeButton>
                <br />
                <FakeButton onClick={navigate("/courses")}>Ver cursos</FakeButton>
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