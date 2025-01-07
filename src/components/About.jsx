import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Zaid, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          3rd year AI & DS Student,Dr.DYP institute of Engineering.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in: JavaScript, Python, C++, HTML, CSS
          <br />
          Experienced with: MERN stack (MongoDB, Express.js, React.js, Node.js), TailwindCSS, DaisyUI, Axios, Git, GitHub
          <br />
          Strong grasp of: Responsive design, component-based architecture, RESTful APIs, authentication, and state management using React hooks
          <br />
          Excellent problem-solving skills: Debugging, optimizing API calls, and implementing secure and scalable features
          Effective communicator and collaborator: Skilled in team-based workflows using Agile methodologies and version control systems
        </span>
        <br />
        <br />
        
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          <h3>SIH Volunteer</h3>
          Student Co-ordinator || I Helps the Participants with issues regarding Systems, Event Layout ,GID no. and their Probl statement queries.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
        My mission is to leverage my expertise in the MERN stack to create innovative and user-centric web applications that enhance digital experiences. I strive to deliver scalable and efficient solutions that exceed client expectations while staying at the forefront of emerging web technologies. Committed to continuous learning, I aim to tackle challenges with creativity and collaboration, contributing positively to the tech ecosystem and fostering impactful growth for businesses and users alike.
        </p>
      </div>
    </div>
  );
}

export default About;
