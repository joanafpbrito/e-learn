import { getAvailableCourses } from "../../https";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CoursesList () {
    const availableCourses = getAvailableCourses();

    const [selectedCourse, setSelectedCourse] = useState(null);

    const navigate = useNavigate();

    


    
    return(
        <>
        <div>
        {availableCourses.length === 0 && <p> Não temos cursos disponíveis!</p>}
        {availableCourses.length > 0 && (
        <ul>
          {availableCourses.map((c) => (
              <Link to={`modules/${c.id}`}>
                <li key={c.id} >
                <img  style={{width:'200px'}} src={`http://localhost:3700/${c.image.src}`} alt={c.image.alt}/>
                <h3>{c.title}</h3>
                </li> 
              </Link>
          ))}
        </ul>
      )}
        </div>
        </>
    )
}

export default CoursesList;