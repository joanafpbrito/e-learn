import { useState } from "react";
import RegisterNewUser from "../components/RegisterNewUser";
import Banner from "../componentsRoot/Banner";
import CourseList from "../components/CoursesList"

function IndexTeacher () {
    const userName=localStorage.getItem("name");
    return (
       <div> 
       <p>ola {userName ? userName : "180"}</p> 
       <Banner/>
       </div>
    )
}

export default IndexTeacher;