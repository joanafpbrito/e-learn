import Banner from "../componentsRoot/Banner";

function IndexUser () {
    const userName=localStorage.getItem("name");
    return (
       <div> 
       <p>ola {userName ? userName : "180"}</p> 
       <Banner/>
       <CourseDetails />
       </div>
    )
}

export default IndexUser;