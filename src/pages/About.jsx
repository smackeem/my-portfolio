import { useState, useEffect } from "react";

const About = () => {
    const [about, setAbout] = useState({});

    const fetchData = async() =>{
        const response = await fetch('../../about.json');
        const data = await response.json();
        setAbout(data);
    }

    useEffect(()=>{
        fetchData()
    }, []);

    const loaded = () =>{
        return(
        <div>
            <h1>{about.name}</h1>
            <div>
                <p>{about.bio}</p>
            </div>
        </div>
        )
    }

    return about ? loaded() : <h2>Loading...</h2>
}

export default About;