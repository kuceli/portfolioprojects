import React from "react";
import Todo from "../assets/todo.png";
import Netflix from "../assets/netflix.png";
import ProjectCard from "../components/ProjectCard";

const ClonedSites = () => {
  return (
    <div>
      <div className="px-20">
        <h1 className="text-4xl my-10">Cloned Sites</h1>
        <ul className="flex flex-wrap justify-between gap-y-10 items-center">
          <ProjectCard
            img={Netflix}
            title="Netflix Landing Page"
            link="https://netflixbykuceli.netlify.app/"
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
    </div>
  );
};

export default ClonedSites;
