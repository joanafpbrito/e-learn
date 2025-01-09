import { getCourseDetails } from "../../https";
import { useState } from "react";
import FakeButton from "../componentsRoot/FakeButton";
import "./coursePage.css";
import courseVideo1 from '../../backend/data/courses-videos/course-one.mp4';
import courseVideo2 from '../../backend/data/courses-videos/course-two.mp4';
import courseVideo3 from '../../backend/data/courses-videos/course-three.mp4';
 
 
function CoursePage(props) {
    const [selectedModule, setSelectedModule] = useState();
    const details = getCourseDetails();
    const filteredDetails = details.filter((m) => m["id-course"] == props.id);
   
    function handleSelectedModule(moduleId) {
        const selectedModuleData = filteredDetails.find((m) => m["id-mod"] === moduleId);
        setSelectedModule(selectedModuleData);
    };
 
    return (
        <>
            <aside className="sidebar">
                {filteredDetails.map((m) => (
                    <div key={m["id-mod"]}>
                        <br />
                        <FakeButton onClick={() => handleSelectedModule(m["id-mod"])}>
                            {m.mod}
                        </FakeButton>
                        <br />
                    </div>
                ))}
            </aside>
 
            {selectedModule && (
                <div className="module-content">
                    <h3 className="module-title">{selectedModule.subtitle}</h3>
                    {selectedModule.video && (
                        <div className="video-container">
                            <video
                                controls
                                src={selectedModule["id-mod"] === "01" ? courseVideo1
                                    : selectedModule["id-mod"] === "02" ? courseVideo2
                                    : selectedModule["id-mod"] === "03" ? courseVideo3
                                    : null}
                                onError={(e) => console.error('Video Error:', e)}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                    <h1>{selectedModule.text}</h1>
                </div>
            )}
        </>
    );
}
 
export default CoursePage;