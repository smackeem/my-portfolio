import { Link } from 'react-router-dom'
import GitHubIcon from '../../assets/images/b-github.png'
import LinkedInIcon from '../../assets/images/b-linkedin.png'
import EmailIcon from '../../assets/images/mail.png'
import HomeIcon from '../../assets/images/home1.png'
import AboutIcon from '../../assets/images/about.png'
import ProjectIcon from '../../assets/images/p1.png'
import ResumeIcon from '../../assets/images/resume.png'
import ResumeFile from '../../assets/resume/resume.pdf'
import './Header.css'


const Header = () => {
    return (
        <header>
            <nav className='navStyle'>
                <div className='home-link'>
                    <Link title='Home' to='#'><img className='img' src={HomeIcon} /></Link>
                </div>
                <div className='contact-links'>
                    <Link title='Projects' className='links' to='/projects'> <img className='img' src={ProjectIcon}/> </Link>
                    <Link title='About' className='links' to='/about'> <img className='img' src={AboutIcon}/> </Link>
                    <Link title='Resume' className='links' to={ResumeFile}> <img className='img' src={ResumeIcon}/></Link>
                </div>
                <div className='contact-links'>
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
            </nav>
        </header>
    )
}

export default Header;