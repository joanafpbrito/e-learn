import CoursePage from "../components/CoursePage";

function IndexTeacher () {
    const userName=localStorage.getItem("name");
    console.log(userName);
    return (
        <>
        <p>ola {userName ? userName : "180"}</p>
        <CoursePage/>
        </>
    )
}

export default IndexTeacher;