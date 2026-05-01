import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImage from '../../assets/lyon_photo.jpg';
import "./Home.css";


function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Software Student"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText ==="") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={7} xl={7}>
                    <span className="tagline">Welcome to my Portfolio!</span>
                    <h1>{`Hi, I'm Tesla Lyon: `}<span className="wrap">{text}</span></h1>
                    <p>I'm a student, developer, artist, and dedicated lifelong learner. I have a passion for creating clean, user-focused applications that solve problems and create engaging experiences. I have a background in teaching and customer service, both of which have helped me learn the value of clear communication and adaptability, and which help me to keep real people in mind when I am developing web applications and software. I collaborate well with teams and I can be an independent self-starter. If you're looking for a developer to bring your ideas to life or to improve an existing project, I'm your person.</p>
                    <button onClick={() => console.log("connect")}>Let's connect</button>
                </Col>
                <Col xs={12} md={5} xl={5}>
                    <img src={ headerImage }id="headerImage" alt="Header Image" />
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default Home;