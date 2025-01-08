import Banner from "../componentsRoot/Banner";


function Teacher () {
    const userName=localStorage.getItem("name");
    return (
       <div> 
       <p>ola {userName && userName }</p> 
       <Banner/>
       </div>
    )
}

export default Teacher;