import CoursePage from "../components/CoursePage";
import { useParams } from "react-router-dom";
import '../index.css';
import '../App.css';
import '../componentsRoot/rootLayout.css';

function IndexModules() {
    let params = useParams();

    return (
        <>
            <CoursePage id={params.id} />
        </>
    )
}

export default IndexModules;