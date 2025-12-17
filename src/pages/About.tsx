export default function About() {
  return (
    <div className="about-page">
      <h2 className="about-header">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          <h2 className="about-subheader">Hi, I'm Wes.</h2>
          <p>
          I'm a senior at the University of Vermont studying Computer Science with a minor in Music Business and Technology, and a software Engineer
          specializing in Digital Signal Processing (DSP) and front-end (UI/UX) design. Music is my passion, coding is my profession, and most of my
          work lies at the intersection of the two. 
          </p>
          <p>
          This is my personal portfolio I've developed to showcase some of my projects and promote my skills as a software engineer and musician. 
          Feel free to explore my work, check out my resume, and reach out if you'd like to connect!
          </p>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}me_on_keys.jpg`}
          alt="Wes Teegarden"
          className="about-image"
        />
      </div>
    </div>
  );
}
