import { useState, useEffect } from "react";
import Headshot from '../../assets/images/headshot.jpg'
import './About.css'
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
        <div className="card">
            
            <section className="card-image">
            <img src={Headshot} alt="" />
            </section>
            
            <div className="card-title">
                <section className="name-container">
                    <h1>{about.name}</h1>
                </section>
                <section className="bio-container">
                    <p>{about.bio}</p>
                </section>
            </div>
        </div>
        )
    }

    return about ? loaded() : <h2>Loading...</h2>
}

export default About;