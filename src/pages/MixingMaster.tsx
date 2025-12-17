import { useEffect } from "react";
import ProjectImages from "../components/ProjectImages";

const mixingMasterImages = [
  "/public/agentFLow.jpg",
  "/public/agentPrompt.jpg",
  "/public/agentOutput.jpg",
  "/public/level1cert.jpg",
  "/public/level2cert.jpg",
  "/public/level3cert.jpg",
];

export default function MixingMaster() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top when component mounts
  }, []);
  
  return (
    <div className="project-view-page">
      <div className="project-view-content">
        {/* Text section */}
        <div className="project-view-text">
          <h2 className="project-view-header">Mixing Master AI Agent</h2>
          <p className="project-view-description">
            During my internship at NeuralSeek this past summer, I had the opportunity to work with their mAIstro platform to develop an AI agent
            I call Mixing Master. Mixing Master leverages GPT-5 to scrape audio mixing and mastering best practices from the web, and reference Digital 
            Audio Workstation Software manuals to provide music producers with comprehensive and explanable solutions to their mixing and mastering challenges.
            By prompting the agent with the problem at hand and the software being used, users recieve step-by-step instructions on how to tackle
            the problem with the tools available to them. Upon completion of the agent, I earned three certificates from NeuralSeek demonstrating proficiency in
            building AI agents for business.
          </p>

          <ul className="project-view-skills">
            <h3 className="project-view-skills-label">Skills Used:</h3>
            <li>AI Agent Automation</li>
            <li>Prompt Engineering</li>
            <li>Multi-Tier AI Agent Architecture</li>
            <li>GPT-5</li>
          </ul>
        </div>  

        {/* Image section */}
        <ProjectImages images={mixingMasterImages} />
      </div>
    </div>
  );
}