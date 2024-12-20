import { getAvailableCourses } from "../../https";

function CoursePage() {

     const availableCourses = getAvailableCourses();
     const userName = localStorage.getItem('name');


    return  (
        <div>
            olá página de curso
            <p> {userName} </p>
            
        </div>
    );
}

export default CoursePage;