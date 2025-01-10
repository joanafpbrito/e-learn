import { getCourseDetails } from "../../https";
import { useState } from "react";
import FakeButton from "../componentsRoot/FakeButton";
import "./coursePage.css";
import courseVideo1 from '../../backend/data/courses-videos/course-one.mp4';
import courseVideo2 from '../../backend/data/courses-videos/course-two.mp4';
import courseVideo3 from '../../backend/data/courses-videos/course-three.mp4';
import courseOneImage from '../../backend/data/front-image-courses/course-one.jpg';



function CoursePage(props) {
    const [selectedModule, setSelectedModule] = useState();
    const [start, setStart] = useState(true);
    const details = getCourseDetails();
    const filteredDetails = details.filter((m) => m["id-course"] == props.id);

    function handleSelectedModule(moduleId) {
        const selectedModuleData = filteredDetails.find((m) => m["id-mod"] === moduleId);
        setSelectedModule(selectedModuleData);
        setStart(false);
    };

    return (
        <>
            <aside className="sidebar">
                {filteredDetails.map((m) => (
                    <div key={m["id-mod"]}>
                        <FakeButton onClick={() => handleSelectedModule(m["id-mod"])}>
                            {m.mod}
                        </FakeButton>
                    </div>
                ))}
            </aside>

            {start && (
                <div>
                    <div className="coursesDescription">
                        <h2 style={{ fontSize: "32px", fontWeight: "500", color: "#008013", textAlign: "left", marginLeft: "400px", marginBottom: '20px', }}>Gestão de Tempo e Produtividade Pessoal</h2>
                        <img
                            src={courseOneImage}
                            alt="courseOneImage"
                            style={{ width: '30%', marginBottom: '20px', marginLeft: "400px" }}
                        />
                        <h5 style={{ fontSize: "18px", fontWeight: "300", color: "#008013", textAlign: "left", marginLeft: "400px" }}>Transforme a sua relação com o tempo e alcance os seus objetivos com mais eficiência e equilíbrio.</h5>
                        <p style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left", marginLeft: "400px" }}>Está constantemente a sentir que o tempo nunca é suficiente? Gostaria de fazer mais, mas sente que está preso em tarefas e distrações? Este curso foi desenhado para ajudá-lo a dominar o seu tempo e aumentar a sua produtividade pessoal. Através de técnicas práticas e comprovadas, aprenderá a planear melhor, estabelecer prioridades e manter o foco, alcançando os seus objetivos com menos stress.</p>
                        <br />

                        <p style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left", marginLeft: "400px" }}><b>A quem se destina este curso?</b></p>
                        <ul style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left" }}>
                            <li>Profissionais que desejam aumentar a sua eficiência.
                            </li>
                            <li>Estudantes que procuram conciliar estudos e vida pessoal.
                            </li>
                            <li>Qualquer pessoa que quer equilibrar trabalho, lazer e desenvolvimento pessoal.
                            </li>
                        </ul>
<br />
                        <p style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left", marginLeft: "400px" }}><b>O que vai aprender?</b></p>
                        <ul style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left" }}>
                            <li>Identificar e superar hábitos que sabotam a sua produtividade.
                            </li>
                            <li>Priorizar tarefas e focar no que realmente importa.
                            </li>
                            <li>Planear o seu dia e a sua semana de forma eficiente e prática.
                            </li>
                            <li>Aplicar ferramentas e técnicas comprovadas para gerir melhor o seu tempo.
                            </li>
                        </ul>
<br />
                        <p style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left", marginLeft: "400px" }}><b>Pré-Requisitos</b></p>
                        <ul style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left" }}>
                            <li>Motivação para melhorar a gestão do seu tempo e produtividade.
                            </li>
                            <li>Acesso a um computador, tablet ou smartphone com ligação à internet.
                            </li>
                            <li>Disponibilidade para dedicar algumas horas por semana ao curso.
                            </li>
                        </ul>
<br />
                        <p style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left", marginLeft: "400px" }}><b>Formato</b></p>
                        <ul style={{ fontSize: "14px", fontWeight: "500", color: "black", textAlign: "left" }}>
                            <li>100% Online: Aceda ao conteúdo a qualquer hora e em qualquer lugar.
                            </li>
                            <li>Vídeo-Aulas: Material explicativo com exemplos práticos.
                            </li>
                            <li>Materiais de Apoio: Guias, modelos de planificação e exercícios práticos.
                            </li>
                            <li>Auto-Ritmo: Avance no seu próprio tempo e reveja os módulos sempre que precisar.
                            </li>
                        </ul>

                    </div>

                    <h1 className="coursesDescription"></h1>
                </div>
            )}

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
                                O seu browser não suporta este vídeo.
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