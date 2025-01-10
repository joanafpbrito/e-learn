import Banner from "../componentsRoot/Banner";
import FakeButton from "../componentsRoot/FakeButton";
import { useNavigate } from "react-router-dom";

function User() {
    const navigate = useNavigate();
    const userName = localStorage.getItem("name");

    function showCourses() {
        navigate("/courses")
    }

    return (
        <>
            <aside className="sidebar">
                <div>
                    <FakeButton onClick={showCourses}>Ver Cursos</FakeButton>
                    <FakeButton>Tarefas</FakeButton>
                    <FakeButton>Chat</FakeButton>
                </div>
            </aside>
            <div>
                <p>Olá, {userName && userName}!</p>
                <Banner />
            </div>
        </>
    )
}

export default User;