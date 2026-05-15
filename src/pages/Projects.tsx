import { Table, Button, Container } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "MG LAB 5",
      description: "This is my Midterm Grading Lab Activity 5.",
      link: "https://balongsit-jy.github.io/MG_LAB5_BALONG/",
    },
    {
      id: 2,
      title: "MG LAB 4",
      description: "This is my Midtßerm Grading Lab Activity 4.",
      link: "https://balongsit-jy.github.io/MG_LAB4_BALONG/",
    },
    {
      id: 3,
      title: "Contact with Gmail",
      description: "This is my Final Lab Activity 1.",
      link: "https://balongsit-jy.github.io/aptech_final_contact_with_gmail/",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>

        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Project Title</th>
              <th>Description</th>
              <th>Live Demo</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>

                <td>{project.title}</td>

                <td>{project.description}</td>

                <td>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
}

export default Projects;