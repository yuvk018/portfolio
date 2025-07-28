"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
const ProjectsData = [
  {
    id: 1,
    title: "Expense Tracker",
    description:
      "A responsive web app to track income and expenses, categorize transactions, and visualize monthly spending.",
    image: "/Images/projects/project1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Tic Tac Toe Game",
    description:
      "A responsive 2-player Tic Tac Toe game with turn logic, win detection, and clean UI.",
    image: "/Images/projects/project2.png",
    video: "/videos/project2.mp4",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "A customizable tool that generates strong, secure passwords with user-defined options for enhanced online safety.",
    image: "/Images/projects/project3.png",
    video: "/videos/project3.mp4",
    tag: ["All", "Python"],
  },
  {
    id: 4,
    title: "PAJAV Website",
    description:
      "A clean, responsive website crafted for the PAJAV society to highlight its offerings and improve user experience",
    image: "/Images/projects/project4.png",
    video: "/videos/project4.mp4",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Calculator",
    description:
      "A responsive web calculator for performing basic arithmetic operations with a clean and intuitive interface.",
    image: "/Images/projects/project5.png",
    video: "/videos/project5.mp4",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Shoe Store",
    description:
      "A sleek and responsive e-commerce site for browsing and buying stylish footwear online",
    image: "/Images/projects/project6.png",
    video: "/videos/project6.mp4",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="text-white px-4 sm:px-8 lg:px-16 py-12">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
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
          name="Python"
          isSelected={tag === "Python"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            video={project.video}
            tags={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
