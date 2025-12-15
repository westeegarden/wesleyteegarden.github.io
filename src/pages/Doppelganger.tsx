import ProjectImages from "../components/ProjectImages";

const doppelgangerImages = [
  "/public/doppelgangerLinkedin.jpg",
  "/public/flowchart.jpg",
  "/public/guiUpdate.jpg",
  "/public/joeyJumpGraph.png",
];

export default function Doppelganger() {
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">DOPPELGANGER ML GUITAR PEDAL</h2>
          <p className="project-view-description">
            The Doppelganger is a machine learning powered guitar pedal that utilizes neural network models to mimic the effects and tones of 
            analog guitar pedals. Models are trained in a PyTorch pipeline where they learn to map input audio signals to output audio signals, effectively learning the characteristics of the target pedal.
            Once trained, models can be loaded onto the Doppelganger and selected for use anytime. The pedal is a VST3 plugin designed to run on
            a Raspberry Pi 4 equipped with digital/analog converters and ElkOS, a low-latency, audio-specific, Linux-based operating system. 
            The user interface is accessed via a desktop application that connects to the pedal over Wi-Fi, allowing users to select models, adjust parameters, and manage settings real-time.
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>Machine Learning</li>
            <li>Data Pipeline Design</li>
            <li>Digital Signal Processing</li>
            <li>Embedded Systems</li>
            <li>Audio Engineering</li>
            <li>UI/UX Design</li>
            <li>C++</li>
            <li>JUCE Framework</li>
            <li>Python</li>
            <li>PyTorch</li>
            <li>ElkOS</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={doppelgangerImages} />
      </div>
    </div>
  );
}