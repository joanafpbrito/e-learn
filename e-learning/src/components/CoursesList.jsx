import { getAvailableCourses, getCourseDetails } from "../../https";
import { useState } from "react";
import CourseDetails from "./CourseDetails";

function CoursesList () {
    const availableCourses = getAvailableCourses();

    const [selectedCourse, setSelectedCourse] = useState(null);

    function handleSelectedCourse(id) {
      const courseDetails = getCourseDetails();
      setSelectedCourse(courseDetails);
      console.log(courseDetails.id);
    }
    
    if (selectedCourse) {
      return (
        <>
        <div>
          <CourseDetails
          id = {selectedCourse.id}
          />
          <h2> {selectedCourse.id} </h2>
          <p> ola curso</p>
          <button onClick={() => setSelectedCourse(null)}>Voltar</button>
        </div>
        </>
      )
    }

    
    return(
        <>
        <div>
        {availableCourses.length === 0 && <p> Não temos cursos disponíveis!</p>}
        {availableCourses.length > 0 && (
        <ul>
          {availableCourses.map((c) => (
            <li key={c.id} >
                <img onClick={() => handleSelectedCourse(c.id)} style={{width:'200px'}} src={`http://localhost:3700/${c.image.src}`} alt={c.image.alt}/>
                <h3>{c.title}</h3>
            </li>
          ))}
        </ul>
      )}
        </div>
        </>
    )
}

export default CoursesList;