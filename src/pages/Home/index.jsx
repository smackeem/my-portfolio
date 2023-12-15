import './Home.css'
import Headshot from '../../assets/images/DSC_9795-Edit.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home-container">
            <section className='about-me margin-lr'>
                <h1 className='title ctr'>-Hi, I&apos;m Ackeem Smith.</h1>
                <h3 className='job ctr'>Full Stack Developer</h3>
                
                <p className='intro'>
                Step into my creative sanctuary, where my mind orchestrates, and my fingers dance across the keyboard, crafting inventive solutions one keystroke at a time.
                </p>
                <Link className='btn-link' to='/about'><button className="button button-gradient rounded-full">More About Me</button></Link>
            </section>
            <section className="headshot-container">
                <img className="headshot" src={Headshot} alt="" />
            </section>
            
        </div>
    )
};

export default Home;