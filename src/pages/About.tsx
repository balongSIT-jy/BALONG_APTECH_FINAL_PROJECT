function About() {
  return (
    <section 
      id="about" 
      // Changed text-white to text-dark
      className="text-dark text-center py-5" 
      style={{ backgroundColor: "white" }} 
    >
      <div className="container">
       
        <h2 className="fw-bold mb-3">About Me</h2>
        
        <div className="row justify-content-center">
          <div className="col-md-7">
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Hi, I’m a student developer passionate about building simple, responsive, 
              and user-friendly applications. I enjoy learning new technologies, 
              especially in web development, and I’m always looking for ways to 
              improve my skills and create meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;