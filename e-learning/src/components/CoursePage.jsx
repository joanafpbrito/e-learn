import { getCourseDetails } from "../../https";
import { useParams } from "react-router";

function CoursePage(props) {
    const details = getCourseDetails();
    const filteredDetails = details.filter((m) => m["id-course"] == props.id);
    console.log(details);


        return  (
            <div>
                olá página de curso
                {filteredDetails.map((m) => (
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