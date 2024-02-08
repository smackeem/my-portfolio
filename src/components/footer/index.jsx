import './Footer.css'
import { Link } from 'react-router-dom'
import GitHubIcon from '../../assets/images/b-github.png'
import LinkedInIcon from '../../assets/images/b-linkedin.png'
import EmailIcon from '../../assets/images/mail.png'
import ResumePDF from '../../assets/resume/resume.pdf'

const Footer = () => {
    return (
        // <div className='footer-container'>
            <footer className='flex flex-col p-3 mt-6'>
                <div className='overflow-hidden flex gap-5 mt-3'>
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
                <div className='m-5'>
                    <a href={ResumePDF} download='Ackeem-Smith-Resume' target='_blank' rel='noreferrer'>
                        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

                            Download CV</button>
                        </a>
                </div>
                <div className='mb-3'>
                    <small><p className='text-gray-300'>Copyright © Ackeem Smith 2023</p></small>
                </div>
                </footer>
        // {/* </div> */}
        
    )
}

export default Footer;