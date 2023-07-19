import React from "react";
// import "../App.css";
import Todo from "../assets/todo.png";
import ProjectCard from "../components/ProjectCard";

const MiniProjects = () => {
  return (
    <div className="border border-solid border-red-500 px-20">
      <h1 className="text-4xl my-10">MINI PROJECTS</h1>
      <ul className="flex flex-wrap justify-between gap-y-10 items-center">
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
      </ul>
    </div>
  );
};

export default MiniProjects;
