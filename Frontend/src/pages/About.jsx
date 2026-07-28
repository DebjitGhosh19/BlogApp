import React from "react";
import { useAuth } from "../context/AuthProvider";

function About() {
  const { profile } = useAuth();
  // console.log(profile);

  return (
    <div className="container mx-auto my-12 p-4 space-y-9">
      <h1 className="text-2xl font-bold mb-6">About</h1>

      <p>
        This is{" "}
        <strong className="text-blue-800 font-semibold hover:scale-105 duration-500">
          {profile?.user?.name}
        </strong>{" "}
        a passionate MERN Stack Developer with expertise in building modern,
        scalable, and responsive web applications. With a strong foundation in
        both frontend and backend development, Debjit focuses on creating
        user-friendly digital experiences and efficient software solutions.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">
        Technical Expertise:
      </h2>

      <p>
        <strong>Front-End:</strong> Skilled in React.js, JavaScript, HTML5,
        CSS3, Tailwind CSS, Redux, and responsive web design principles.
        <br />
        <strong>Back-End:</strong> Proficient in Node.js, Express.js, REST APIs,
        JWT Authentication, and server-side application development.
        <br />
        <strong>Database:</strong> Experienced with MongoDB and Mongoose for
        designing and managing scalable databases.
        <br />
        <strong>Tools & Technologies:</strong> Git, GitHub, Postman, VS Code,
        Cloudinary, Socket.io, and API integration.
      </p>

      <h2 className="font-semibold text-blue-800 text-xl">
        Professional Highlights:
      </h2>

      <p>
        Developed multiple full-stack projects including a Blog Application,
        Real-Time Chat Application, E-Commerce Website, and Todo Management
        System. Experienced in implementing authentication, authorization,
        database integration, and responsive user interfaces. Passionate about
        solving real-world problems through technology and continuously learning
        new tools and frameworks.
      </p>

      <br />

      <span>
        Debjit Ghosh is dedicated to building innovative web applications and
        improving his skills as a software developer. Whether working on
        frontend user interfaces or backend APIs, he strives to deliver
        high-quality solutions that provide excellent user experiences.
      </span>

      <h2 className="font-semibold text-blue-800 text-xl">
        Personal Interests and Inspiration:
      </h2>

      <p>
        Beyond coding, Debjit enjoys exploring new technologies, practicing DSA
        with JavaScript, and working on MERN Stack projects. He is passionate
        about continuous learning, software development, and staying updated
        with the latest industry trends. His goal is to grow as a professional
        full-stack developer and contribute to impactful technology solutions.
      </p>
    </div>
  );
}

export default About;