import Banner from "../componentsRoot/Banner";

function User () {
    const userName=localStorage.getItem("name");
    return (
       <div> 
       <p>ola {userName && userName }</p> 
       <Banner/>
       </div>
    )
}

export default User;