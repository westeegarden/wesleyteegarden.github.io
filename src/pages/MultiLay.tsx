import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const multiLayImages = [
  "/public/MultiLayGUI.jpg",
];

export default function MultiLay() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">Multi-Lay VST Plugin</h2>
          <p className="project-view-description">
            Multi-lay is my first foray into audio plugin development. Built using the JUCE framework in C++, Multi-lay is a VST plugin that 
            allows users to create complex layered sounds using three variable delay channels. Each channel has variable delay time, feedback,
            and gain, as well as a high/low pass filter with adjustable cutoff frequency, and a toggleable ping-pong delay effect. These parameters
            can be adjusted to create unique soundscapes and textures in one plugin.
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Digital Signal Processing</li>
            <li>UI/UX Design</li>
            <li>Full Stack Development</li>
            <li>C++</li>
            <li>JUCE Framework</li>
            <li>VST Plugin Development</li>
            <li>Audio Engineering</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={multiLayImages} />
      </div>
    </div>
  );
}