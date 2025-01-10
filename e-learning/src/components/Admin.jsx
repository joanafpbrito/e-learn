import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../componentsRoot/Banner";
import FakeButton from "../componentsRoot/FakeButton";
import RegisterNewUser from "./RegisterNewUser";


function Admin() {

    const navigate = useNavigate();
    const [banner, setBanner] = useState(true);
    const [newUser, setNewUser] = useState();


    function showRegisterNewUser() {
        setNewUser(true);
        setBanner(false);
        setCourseList(false);
    }

    function showCourses() {
        navigate("/courses")
    }


    return (
        <>
            <aside className="sidebar">
                <div>
                    <FakeButton onClick={showRegisterNewUser}>Registo de Utilizadores</FakeButton>
                    <FakeButton onClick={showCourses}>Monitorizar Cursos</FakeButton>
                    <FakeButton>Estatísticas Gerais</FakeButton>
                    <FakeButton>Definições Gerais</FakeButton>
                    <FakeButton>Gerir Chats</FakeButton>
                    <FakeButton>Suporte aos Utilizadores</FakeButton>
                </div>
            </aside>


            {banner &&
                <div>
                    <Banner />
                </div>
            }
            {newUser &&
                <div>
                    <RegisterNewUser />
                </div>
            }

        </>
    )
}

export default Admin;
