/* import { useState, useEffect } from "react"; */
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import onc from "../../assets/ournationalconversation_screengrab.png"
import habitTracker from "../../assets/project_screengrabs/habit_tracker_figmascreengrab.png"
import portfolio from "../../assets/project_screengrabs/developer_portfolio.png"
import placeholder from "../../assets/project_screengrabs/placeholder_browser.jpg"
import ProjectCard from "./ProjectCard.jsx"
import "./Projects.css";

function Projects() {
    
    const projects = [
        {
            title: "Our National Conversation",
            description: "Software Development Intern (Frontend)",
            imgUrl: onc,
            liveLink: "https://www.ournationalconversation.org/"
        },
        {
            title: "Habit Tracker",
            description: "An in-progress CRUD app",
            imgUrl: habitTracker,
            liveLink: ""
        },
        {
            title: "Portfolio",
            description: "My portfolio site (you're here!)",
            imgUrl: portfolio,
            liveLink: "https://www.teslalyon.com/"
        },
        {
            title: "TBA",
            description: "Placeholder image via vecteezy.com",
            imgUrl: placeholder,
            liveLink: "https://www.vecteezy.com/vector-art/5429687-browser-window-mockup-modern-internet-page"
        },
        {
            title: "TBA",
            description: "Placeholder image via vecteezy.com",
            imgUrl: placeholder,
            liveLink: "https://www.vecteezy.com/vector-art/5429687-browser-window-mockup-modern-internet-page"
        },
        {
            title: "TBA",
            description: "Placeholder image via vecteezy.com",
            imgUrl: placeholder,
            liveLink: "https://www.vecteezy.com/vector-art/5429687-browser-window-mockup-modern-internet-page"
        }
    ]

    return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <div className="project-tx">
                    <h2>Projects</h2>
                    <p>Check out my projects below to see my work in action.</p>
                    <p>I build full-stack web applications using HTML, CSS, JavaScript, and Python. My primary stack includes React, Node.js, and Express, where I focus on creating scalable and maintainable applications.</p>
                    <p>I have experience working with both MongoDB and SQL, designing and integrating databases to support dynamic, data-driven features.</p>
                    <p>On the frontend, I enjoy writing custom CSS to create clean, responsive designs, while also using frameworks like Bootstrap and Tailwind to efficiently build polished user interfaces.</p>
                    <p>In Python, I’ve worked with libraries such as Matplotlib, NumPy, and Pandas for data analysis and visualization.</p>
                </div>
                <div>
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index}
                                    {...project} />
                                )
                            })
                        }
                    </Row>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default Projects;