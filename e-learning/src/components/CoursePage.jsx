import { getCourseDetails } from "../../https";

function CoursePage() {

const details = getCourseDetails();
console.log(details);


    return  (
        <div>
            olá página de curso
            {details.map((course) => (
                <div key= {course.id} >
                    <h2>{course.id}</h2>
                    {course.modules.map((m) => (
                        <div key={m["id-mod"]}>
                            <h3>{m.subtitle}</h3>
                            <p>{m.text}</p>
                            
                        </div>

                    )
                    )}


                </div>
            )
            )}
           
            
        </div>
    );
}

export default CoursePage;