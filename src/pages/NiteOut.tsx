import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const niteOutImages = [
  "/public/NiteOutHome.jpg",
  "/public/NiteOutEvents.jpg",
  "/public/NiteOutMap.jpg",
];

export default function NiteOut() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">NiteOut Event Finder App</h2>
          <p className="project-view-description">
            For a group final in my Software Engineering class, my team and I developed NiteOut, a web application designed to help users discover
            local events and activities, as well as plan outings with friends. The app features an intuitive interface where users can browse events 
            in a feed, or use an interactive map to find nearby events. 
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Full Stack Development</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Flask</li>
            <li>SQL</li>
            <li>REST API design</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={niteOutImages} />
      </div>
    </div>
  );
}