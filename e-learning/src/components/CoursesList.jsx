import { getAvailableCourses } from "../../https";

function CoursesList () {

    const availableCourses = getAvailableCourses();
    
    return(
        <>
        <div>
        ola página de cursos!
        
        </div> 
        <div>
        {availableCourses.length === 0 && <p> Não temos cursos disponíveis!</p>}
        {availableCourses.length > 0 && (
        <ul>
          {availableCourses.map((c) => (
            <li key={c.id}>
                <a href="/"><img style={{width:'100px'}} src={`http://localhost:3700/${c.image.src}`} alt={c.image.alt}/>
                <h3>{c.title}</h3></a>
            </li>
          ))}
        </ul>
      )}
        </div>
        </>
    )
}

export default CoursesList;