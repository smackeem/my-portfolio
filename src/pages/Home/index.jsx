import './Home.css'
import Headshot from '../../assets/images/edited.png'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className="home-container">
            <section className="headshot-container">
                <img className="headshot" src={Headshot} alt="" />
            </section>
            <section className='about-me margin-lr'>
            
                <h1 className='title ctr'><strong>-Hi, I&apos;m Ackeem Smith.</strong></h1>
                <h3 className='ctr'><TypeAnimation
        sequence={[
          "Full Stack Developer",
          1000,
          "Software Developer",
          1000,
          "Software Engineer",
          1000,
          "UI/UX Designer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1.5em' }}
      /></h3>
                
                <p className='intro'>
                Step into my creative sanctuary, where my mind orchestrates, and my fingers dance across the keyboard, crafting inventive solutions one keystroke at a time.
                </p>
            </section>
        </div>
    )
};

export default Home;