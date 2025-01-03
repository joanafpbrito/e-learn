import CoursesList from "../components/CoursesList";

function IndexAdmin () {
    const userName=localStorage.getItem("name");
    return (
        <>
        <p>ola {userName ? userName : "180"}</p>
        <CoursesList/>
        </>
    )
}

export default IndexAdmin;