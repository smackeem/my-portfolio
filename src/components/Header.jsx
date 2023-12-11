import { Link } from 'react-router-dom'

const Header = () => {
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        borderBottom: ".2rem solid black",
        padding: ".5rem",
        width: "90%",
        margin: "auto",
      };

    return (
        <header>
            <h1>My Portfolio Page</h1>
        <nav style={navStyle}>
            <Link to='/'>Home</Link> | 
            <Link to='/projects'> Projects</Link> | 
            <Link to='/about'> About</Link>
        </nav>
        </header>
    )
}

export default Header;