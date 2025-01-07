import { getCourseDetails } from "../../https";
import { useParams } from "react-router";

function CoursePage(id) {
    const details = getCourseDetails();
    console.log(details);


        return  (
            <div>
                olá página de curso
                {details.filter((m) => m["id-course"] === id.toString() (
                    <div key={m["id-mod"]}>
                        <h3>{m.subtitle}</h3>
                        <p>{m.text}</p>
                        
                    </div>
                )
                )} 
            </div>
        );
}

export default CoursePage;