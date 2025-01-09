import { getCourseDetails } from "../../https";
import { useState } from "react";
import FakeButton from "../componentsRoot/FakeButton";


function CoursePage(props, moduleId) {
    const [selectedModule, setSelectedModule] = useState(false);
    const details = getCourseDetails();
    const filteredDetails = details.filter((m) => m["id-course"] == props.id);
    console.log(details);



    function handleSelectedModule(moduleId) {
        const selectedModuleData = filteredDetails.find((m) => m["id-mod"] === moduleId)
        setSelectedModule(selectedModuleData)
    };

    const filteredModules = details.filter((mod) => mod["id-mod"] == moduleId);

    return (
        <>
            <aside className="sidebar">

                {filteredDetails.map((m) => (
                    <div>
                        <br />
                        <FakeButton onClick={() => handleSelectedModule(m['id-mod'])}>
                            {m.mod}
                        </FakeButton>
                        <br />
                    </div>
                )
                )}

            </aside>
            {selectedModule && (
                <div className="module-content">
                    <h3 className="module-title">{selectedModule.subtitle}</h3>
                    {selectedModule.video && (
                        <div className="video-container">
                            <video controls>
                                <source src={selectedModule.video.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <p>{selectedModule.text}</p>
                </div>
            )}

        </>
    );
}

export default CoursePage;