import '../index.css';
import '../App.css';
import '../componentsRoot/rootLayout.css';
import { useParams } from "react-router-dom";
import CoursesList from "../components/CoursesList";

function IndexCourses () {
    let params = useParams();
    
  
    return (
        <>
        <p>ola cursos</p>
        <CoursesList/>
        </>
    )
}

export default IndexCourses;