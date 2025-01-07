import CoursePage from "../components/CoursePage";
import { useParams } from "react-router-dom";

function IndexModules () {
    let params = useParams()
   
    console.log(params.id);
  
    return (
        <>
        <p>ola modulos</p>
        <CoursePage
        props = {params.id}/>
        </>
    )
}

export default IndexModules;