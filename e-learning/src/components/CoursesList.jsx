import { getAvailableCourses } from "../../https";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FakeButton from "../componentsRoot/FakeButton";
import "./coursePage.css";

function CoursesList() {
  const availableCourses = getAvailableCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  function handleSelectedCourse(courseId) {
    setSelectedCourse(courseId);
    navigate(`/courses/modules/${courseId}`);
  };

  return (
    <>
      <aside className="sidebar">
        <div>
          <FakeButton >Pesquisar por Categoria</FakeButton>
          <FakeButton >Pesquisar por Formador</FakeButton>
          <FakeButton >Cursos em Destaque</FakeButton>
        </div>
      </aside>

      <div className="containerCursos">
      <h1>Cursos em Destaque</h1>
        {availableCourses.length === 0 && <p> Não temos cursos disponíveis!</p>}
        {availableCourses.length > 0 && (
          <ul className="Courses">
            {availableCourses.map((c) => (
              <li key={c.id} >
                <img onClick={() => handleSelectedCourse(c.id)}  src={`http://localhost:3700/${c.image.src}`} alt={c.image.alt} />
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </li>

            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default CoursesList;