import { getCourseDetails } from "../../https";
import { useState } from "react";
import FakeButton from "../componentsRoot/FakeButton";


function CoursePage(props, moduleId) {
    const [selectedModule, setSelectedModule] = useState();
    const details = getCourseDetails();
    const filteredDetails = details.filter((m) => m["id-course"] == props.id);
    console.log(details);
    

    
    function handleSelectedModule (moduleId) {
        console.log("id" + moduleId);
        setSelectedModule(moduleId);
        
        //const filteredModules = filteredDetails.find(({id-mod}) => id-mod == moduleId);
        console.log(filteredModules);
      };


        return  (
            <>
            <aside className="sidebar">
            
            {filteredDetails.map((m) => (
                <div>
                <br />
                <FakeButton onClick={()=>handleSelectedModule(m['id-mod'])}>{m.mod}</FakeButton>
                <br />
                </div>
            )
        )} 
            
        </aside>

        {selectedModule  &&
            <div>
                olá página de curso


                    <div key={m["id-mod"]}>
                        <h3>{m.subtitle}</h3>
                        <p>{m.text}</p>
                        
                    </div>
                
             
            </div>
            }
            </>
        );
}

export default CoursePage;