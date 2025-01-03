import RegisterNewUser from "../components/RegisterNewUser";

function Index180 () {
    const userName=localStorage.getItem("name");
    return (
        <>
       
        <p>ola {userName ? userName : "180"}</p>
        <RegisterNewUser/>
        </>
    )
}

export default Index180;