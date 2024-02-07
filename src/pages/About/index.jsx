import { useState, useEffect } from "react";
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
            <div className="about-container px-6 py-8 flex flex-col justify-center md:grid md:grid-cols-6">
                <div className="background-container flex flex-col justify-center md:col-start-2 md:col-span-4">
                    <div className="flex flex-col justify-center mr-t">
                    <h1 className=" title text-orange-600 text-center">ABOUT ME</h1>
                    </div>
                    <div className="flex mt-14 flex-col justify-center ">
                    <article className='bio '>
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
                     <hr className="mt-5"/>
                </article>
                
                    </div>
                    

                </div>
                
                <div className="flex flex-col pt-6 justify-center mr-t md:col-start-2 md:col-span-4">

                
                <h1 className="text-orange-600 title text-center">SKILLS</h1> 
                <div className="skills-box flex flex-col mt-14">
                {frontend.map((f, x) => {
                    return(
                        <div  key={x} className=" flex flex-row mt-4 m-3">
                            <div className="flex justify-center skill-title basis-1/4">
                                <h2 className="cat text-lg">{f.cat}</h2>
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
                </div>

        )
    }

    return frontend ? loaded() : <h2>Loading...</h2>
}

export default About;