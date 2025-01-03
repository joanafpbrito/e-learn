function IndexUser () {
    const userName=localStorage.getItem("name");
    return (
       <div> 
       <p>ola {userName ? userName : "180"}</p> 
       <p>ola patricia</p></div>
    )
}

export default IndexUser;