import { useState, useEffect } from "react";
import './About.css'
const About = () => {
    // const [about, setAbout] = useState({});
    const [frontend, setFrontend] = useState([]);
    const [backend, setBackend] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [other, setOther] = useState([]);

    const fetchData = async () => {
        const frontResp = await fetch('../../frontend.json');
        const frontData = await frontResp.json();
        const backResp = await fetch('../../backend.json');
        const backData = await backResp.json()
        const langResp = await fetch('../../languages.json');
        const langData = await langResp.json()
        const otherResp = await fetch('../../other.json');
        const otherData = await otherResp.json()
        setFrontend(frontData);
        setBackend(backData)
        setLanguages(langData)
        setOther(otherData)
    }

    useEffect(() => {
        fetchData()
    }, []);

    const loaded = () => {
        return (
            <div className="about-container">
                <div className="background-container">
                    <h1 className="text-orange-600 title">Background</h1>
                    <p className='bio'>
                    I navigate the dynamic world of web development as both a frontend 
                    and backend artisan, crafting ingenious solutions for intricate 
                    problems. When confronted by a formidable blocker, I embrace the 
                    poetic dance of problem-solving, finding solace in the whispers 
                    of inspiration during my reflective strolls. Web development, to 
                    me, is not merely a profession; it&apos;s a canvas for self-expression,
                     a passionate work of art where thoughts and ideas seamlessly 
                     metamorphose into code. Every keystroke is a stroke of genius, 
                     a testament to my unwavering commitment to transforming 
                     complexities into elegant simplicity. In this exhilarating 
                     journey, my creations unfold, and a vibrant drama plays out on the 
                     digital stage.
                </p>
                    <hr />
                </div>

                <h1 className="text-orange-600 title">My Skills</h1> 
                <div className="skills-container ">
                
                    <div className="card-containers">
                        <div className="skill-title">
                            <h3>Frontend</h3>
                        </div>
                        <div className="info-container">
                            {frontend.map((f, idx) => {
                                return (
                                 
                                 <img className="badge" key={idx} src={f.badge} alt="" />
                                )
                            }
                            )}
                        </div> 
                    </div>

                    <div className="card-containers">
                        <div className="skill-title">
                            <h3>Backend</h3>
                        </div>
                        <section  className="info-container">
                        {backend.map((b, idx) => {
                            return (
                                
                                    <img key={idx} className="badge" src={b.badge} alt="" />
                                
                            )
                        }
                        )}
                        </section>
                    </div>

                    <div className="card-containers">
                        <div className="skill-title">
                        <h3>Languages</h3>
                        </div>
                        <section  className="info-container">
                        {languages.map((l, idx) => {
                            return (
                                    <img key={idx} className="badge" src={l.badge} alt="" />
                               
                            )
                        }
                        )}
                         </section>
                    </div>

                    <div className="card-containers">
                        <div className="skill-title">
                        <h3>Other</h3>
                        </div>
                        <section  className="info-container">
                        {other.map((o, idx) => {
                            return (
                                
                                    <img key={idx} className="badge" src={o.badge} alt="" />
                               
                            )
                        }
                        )}
                         </section>
                    </div>
                </div>

            </div>
        )
    }

    return frontend ? loaded() : <h2>Loading...</h2>
}

export default About;