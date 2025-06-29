"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "FARM AI",
    description: "SmartHarvest empowers farmers with data-driven insights to make informed decisions and adopt best practices in farming.",
    image: "farmAI.png",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://github.com/ayushmaan100/SmartHarvest",
  },
  {
    id: 2,
    title: "React Weather App",
    description: "The app displays the current weather conditions, including temperature and weather description.",
    image: "weather.png",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://react-weather-app-shemmee.netlify.app/",
  },
  {
    id: 3,
    title: "Chat App",
    description: "A full-stack real-time chat application built from scratch using ReactJS (Frontend), Node.js + Express (Backend), MongoDB for database, Socket.IO for real-time messaging, and JWT authentication for secure login.",
    image: "chat.png",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://github.com/ayushmaan100/ChatApp",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;