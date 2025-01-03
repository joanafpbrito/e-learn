import { getCourseDetails } from "../../https";

function CourseDetails(id) {

const details = getCourseDetails();
console.log(details);


    return  (
        <div>
            olá página de curso
            {details.find((course) => (
                <div key= {course.id} >
                    <h2>{course.id}</h2>
                    {course.modules.map((m) => (
                        <div key={m["id-mod"]}>
                            <h3>{m.subtitle}</h3>
                            <p>{m.text}</p>
                            <video src={m.video.src}></video>
                        </div>

                    )
                    )}


                </div>
            )
            )}
           
            
        </div>
    );
}

export default CourseDetails;