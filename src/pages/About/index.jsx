import { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import './About.css'
const About = () => {
    // const [about, setAbout] = useState({});
    const [frontend, setFrontend] = useState([]);

    const fetchData = async () => {
        const frontResp = await fetch('../../frontend.json');
        const frontData = await frontResp.json();
        setFrontend(frontData);

    }

    useEffect(() => {
        fetchData()
    }, []);

    const loaded = () => {
        return (
            <div className="about-container mt-5">
                <div className="background-container">
                    <h1 className="text-orange-600 title">ABOUT ME</h1>
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

                </div>
                <hr />
                <h1 className="text-orange-600 title">SKILLS</h1> 
                <div className="flex flex-col mt-4">
                {frontend.map((f, x) => {
                    return(
                        <div  key={x} className="flex flex-row m-3">
                            <div className="flex skill-title basis-1/4">
                                <h3 className="cat">{f.cat}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2 basis-3/4">
                                {f.skills.map((skill, idx) => {
                                    return (
                                 
                                        <img className="badge" key={idx} src={skill.badge} alt="" />
                                        )
                                    }
                                )}
                            </div> 
                         </div> 
                    )
                                })}
                    
                    </div>
                </div>

        )
    }

    return frontend ? loaded() : <h2>Loading...</h2>
}

export default About;