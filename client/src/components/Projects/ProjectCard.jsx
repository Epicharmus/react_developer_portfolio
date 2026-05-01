import { Col } from "react-bootstrap";
import "./Projects.css";

function ProjectCard({ title, description, imgUrl, liveLink }) {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href={liveLink} class="button">Visit Me</a>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;