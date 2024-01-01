import './Footer.css'
import { Link } from 'react-router-dom'
import GitHubIcon from '../../assets/images/b-github.png'
import LinkedInIcon from '../../assets/images/b-linkedin.png'
import EmailIcon from '../../assets/images/mail.png'

const Footer = () => {
    return (
        // <div className='footer-container'>
            <footer className='flex flex-col'>
                <div className='flex gap-5'>
                    <Link title='LinkedIn' to='https://www.linkedin.com/in/smackeem/' className='links' target="_blank" rel="noreferrer">
                    <img className='img' src={LinkedInIcon} alt="" />
                    </Link>
                    <Link title='Github' to='https://github.com/smackeem/' className='links' target="_blank" rel="noreferrer">
                    <img className='img' src={GitHubIcon}/>
                    </Link>
                    <Link title='Email' to='mailto:smackeem@outlook.com' className='links' target="_blank" rel="noreferrer">
                    <img className='img' src={EmailIcon}/>
                    </Link>
                </div>
                <div>
                    <a href="../../assets/resume/resume.pdf" download><button className='button'>Download CV</button></a>
                </div>
                <div>
                    <small><p>Copyright © Ackeem Smith 2023</p></small>
                </div>
                </footer>
        // {/* </div> */}
        
    )
}

export default Footer;