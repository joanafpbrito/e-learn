import Banner from "../componentsRoot/Banner";
import RegisterNewUser from "../components/RegisterNewUser";
import CoursesList from "../components/CoursesList";

function IndexAdmin () {
    const userName=localStorage.getItem("name");
    const [banner, setBanner] = useState(true);
    const [newUser, setNewUser] = useState();
    const [courseList, setCourseList] =useState();

    function showRegisterNewUser () {
      setNewUser(true);
      setBanner(false);
      setCourseList(false);
    }

    function showCourseList() {
        setCourseList(true);
        setBanner(false);
        setNewUser(false);
    }
    return (
        <>
        <aside className="sidebar">
            <div>
                <p onClick={showRegisterNewUser} > <strong>Register New User</strong> </p>
                <br />
                <p onClick={showCourseList}> <strong>Mostrar Cursos</strong> </p>
                <br />
                <br />
                <br />
                <br /> 
            </div>
        </aside>
        <p>ola {userName ? userName : "180"}</p>

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
        {courseList &&
            <div>
                <CoursesList/> 
            </div>
        }
        
        </>
    )
}

export default IndexAdmin;