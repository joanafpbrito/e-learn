function IndexUser () {
    const userName=localStorage.getItem("name");
    return (
       <p>ola {userName ? userName : "180"}</p> 
    )
}

export default IndexUser;