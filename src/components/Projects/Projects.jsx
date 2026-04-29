import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";
import onc from "../../assets/ournationalconversation_screengrab.png"
import habitTracker from "../../assets/habit_tracker_figmascreengrab.png"


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
        }
    ]

    return (
    <section className="banner" id="projects">
        <Container>
            <h1>This is where my projects will go.</h1>
        </Container>
    </section>
    );
}

export default Projects;