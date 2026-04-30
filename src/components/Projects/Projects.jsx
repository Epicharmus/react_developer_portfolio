import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import onc from "../../assets/ournationalconversation_screengrab.png"
import habitTracker from "../../assets/habit_tracker_figmascreengrab.png"
import portfolio from "../../assets/developer_portfolio.png"

function Projects() {
    
    const projects = [
        {
            title: "Our National Conversation",
            description: "Software Development Intern (Frontend)",
            imgUrl: onc
        },
        {
            title: "Habit Tracker",
            description: "An in-progress CRUD app",
            imgUrl: habitTracker
        },
        {
            title: "Portfolio",
            description: "My portfolio site (you're here!)",
            imgUrl: portfolio
        }
    ]

    return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default Projects;