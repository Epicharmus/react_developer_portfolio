import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import dev_icon from '../../assets/dev_icon.png';
import linkedIn from '../../assets/in-logo/InBug-White.png';
import github from '../../assets/github-mark/github-mark-white.svg';
import "./NavBar.css";


function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
        const onUpdateActiveLink = (value) => {
            setActiveLink(value);
        }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand class="logo" href="#home">
                <img src={dev_icon} 
                alt="Logo"
                width={50}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={github} alt="GitHub" /></a>
                        <a href="#"><img src={linkedIn} alt="LinkedIn" /></a>
                    </div>
                    <button className="vvd" onClick={() => console.log("connect")}>
                        <span>Let's Connect</span>
                    </button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;