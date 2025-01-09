import { getAvailableCourses } from "../../https";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FakeButton from "../componentsRoot/FakeButton";


function CoursesList() {
  const availableCourses = getAvailableCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  function handleSelectedCourse (courseId) {
    setSelectedCourse(courseId);
    navigate(`/courses/modules/${courseId}`);
  };

  return (
    <>

      <aside className="sidebar">
          <div>
              <br />
              <FakeButton > Pesquisar por categoria </FakeButton>
              <br />
              <FakeButton > Pesquisar por formador </FakeButton>
              <br /> 
          </div>
      </aside>


      <div className="containerCursos">
        {availableCourses.length === 0 && <p> Não temos cursos disponíveis!</p>}
        {availableCourses.length > 0 && (
          <ul className="Courses">
            {availableCourses.map((c) => (
              <li key={c.id} >
                <img onClick={() => handleSelectedCourse(c.id)} style={{ width: '200px' }} src={`http://localhost:3700/${c.image.src}`} alt={c.image.alt} />
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