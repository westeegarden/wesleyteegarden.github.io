import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const compChordsImages = [
  "/public/compChordsLogo.jpg",
  "/public/ChordBank.jpg",
  "/public/TrackBuild.jpg",
];

export default function compChords() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">Compatible Chords CLI Tool</h2>
          <p className="project-view-description">
            Compatible Chords is a command-line-interface application I built in my Advanced Programming course using C++. With Compatible Chords,
            musicians can quickly look up and craft chord progressions that fit well together based on music theory principles. User can select chords
            from a chord bank and use them to build complex chord progressions, which can then be exported as MIDI files so users can listen to their 
            compositions in digital audio workstations. A previous iteration included a feature where users could render their chords as sheet music.
            This spring, I am embarking on an independent study in UX design where I will pivot this app to a full-scale web application with an intuitive 
            user interface and additional features to help musicians learn music theory concepts, so stay tuned!
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>C++</li>
            <li>Object-Oriented Programming</li>
            <li>Data Structures</li>
            <li>File I/O</li>
            <li>MIDI File Generation</li>
            <li>Music Theory</li>
            <li>Webview</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={compChordsImages} />
      </div>
    </div>
  );
}