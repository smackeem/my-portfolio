import { Link } from 'react-router-dom'
import GitHubIcon from '../../assets/images/b-github.png'
import LinkedInIcon from '../../assets/images/b-linkedin.png'
import EmailIcon from '../../assets/images/b-email.png'
import './Header.css'


const Header = () => {
    return (
        <header>
            <nav className='navStyle'>
                <div className='home-link'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='page-links'>
                    <Link to='/projects'> PROJECTS </Link>
                    <Link to='/about'> ABOUT </Link>
                    <Link to='/resume'> RESUME</Link>
                </div>
                {/* <div className='contact-links'>
                    <Link >
                    <img src={LinkedInIcon} alt="" />
                    </Link>
                    <Link >
                    <img src={GitHubIcon}/>
                    </Link>
                    <Link >
                    <img src={EmailIcon}/>
                    </Link>
                </div> */}
            </nav>
        </header>
    )
}

export default Header;