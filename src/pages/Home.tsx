import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";

import Navbar from "../components/Navbar";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function Home() {
  return (
    <>
    
      <Navbar />

     
      <section
        className="text-light d-flex align-items-center"
        style={{
          minHeight: "70vh",
          background:
            "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              

              <h1 className="display-2 fw-bold text-info">
                Jyra Lhe B. Balong
              </h1>

              <p className="lead mt-4">
                A passionate student developer focused on creating
                modern, responsive, and user-friendly web applications
                using React and Bootstrap.
              </p>

              <div className="mt-4">
                <Button
                  variant="info"
                  size="lg"
                  href="#projects"
                  className="me-3"
                >
                  View Projects
                </Button>

                <Button
                  variant="outline-light"
                  size="lg"
                  href="#contact"
                >
                  Contact Me
                </Button>
              </div>
            </Col>

            <Col md={6} className="text-center mt-5 mt-md-0">
              
              
            </Col>
          </Row>
        </Container>
      </section>

     
      <section
        id="about"
        className="py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Card className="border-0 shadow-lg p-4 rounded-4">
            <Card.Body>
              <About />
            </Card.Body>
          </Card>
        </Container>
      </section>

     
      <section
        id="projects"
        className="py-5"
        style={{
          background:
            "linear-gradient(to right, #eef2f3, #dfe9f3)",
        }}
      >
        <Container>
          <Card className="border-0 shadow-lg p-4 rounded-4">
            <Card.Body>
              <Projects />
            </Card.Body>
          </Card>
        </Container>
      </section>

     
      <section
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Card className="border-0 shadow-lg rounded-4">
                <Card.Body className="p-5">
                  <Contact />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

    
      <footer
        className="text-center text-light py-4"
        style={{
          background:
            "linear-gradient(135deg, #141e30, #243b55)",
        }}
      >
        <Container>
          <h5 className="fw-bold">My Portfolio</h5>

          <p className="mb-1">
            Built with React + Bootstrap
          </p>

          <small>
            © 2025 Jane Rose Balong. All Rights Reserved.
          </small>
        </Container>
      </footer>
    </>
  );
}

export default Home;