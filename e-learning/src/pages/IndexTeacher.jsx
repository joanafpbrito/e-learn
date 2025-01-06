import Banner from "../componentsRoot/Banner";


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