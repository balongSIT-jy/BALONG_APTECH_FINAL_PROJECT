
function Projects() {
  return (
    <section id="projects" className="container-fluid p-0">
      <h3>Projects</h3>

      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Project 1</h5>
            <p>This is my Midterm Grading Lab Acvtivity 5</p>
            <a href="https://balongsit-jy.github.io/MG_LAB5_BALONG/"
              target="_blank"
              rel="mg lab 5"
              className="btn btn-primary"
            >MG LAB 5</a>
            <p>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Project 2</h5>
            <p>This is my Midterm Grading Lab Activity 4</p>
            <a href="https://balongsit-jy.github.io/MG_LAB4_BALONG/"
              target="_blank"
              rel="mg lab 4"
              className="btn btn-primary"
            >MG LAB 4</a>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5>Project 3</h5>
            <p>This is my Final Lab Activity 1</p>
            <a href="https://balongsit-jy.github.io/aptech_final_contact_with_gmail/"
              target="_blank"
              rel="contact with gmail"
              className="btn btn-primary"
            >Contact with Gmail</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;