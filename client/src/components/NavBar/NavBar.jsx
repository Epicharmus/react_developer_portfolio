import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import dev_icon from '../../assets/dev_icons/dev_icon.png';
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

        const sections = document.querySelectorAll("section");

        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;

            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        if (current) {
            setActiveLink(current);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, []);

    return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
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
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => setActiveLink('home')}>Home</Nav.Link>
                    {/*
                    Add at a later date -- skills section to be created
                    
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    */}
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active-navbar-link' : 'navbar-link'} onClick={() => setActiveLink('connect')}>Let's Connect</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://github.com/Epicharmus"><img src={github} alt="GitHub" /></a>
                        <a href="https://www.linkedin.com/in/tesla-lyon/"><img src={linkedIn} alt="LinkedIn" /></a>
                    </div>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default NavBar;