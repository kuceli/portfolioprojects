import React from "react";
import Todo from "../assets/todo.png";
import Contact from "../assets/contact.png";
import Starwars from "../assets/starwars.png";
import Profile from "../assets/profile.png";
import Calculator from "../assets/calculator.png";
import Game from "../assets/game.png";
import ProjectCard from "../components/ProjectCard";

const MiniProjects = () => {
  return (
    <div className="px-5 lg:px-20">
      <h1 className="text-4xl my-8 font-medium">MINI PROJECTS</h1>
      <ul className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 items-center">
        <ProjectCard
          img={Todo}
          title="To-Do List"
          link="https://todolistbykuceli.netlify.app"
        />
        <ProjectCard
          img={Contact}
          title="Contact Form"
          link="https://contactformbykuceli.netlify.app"
        />
        <ProjectCard
          img={Calculator}
          title="Calculator"
          link="calculatorbykuceli.netlify.app"
        />
        <ProjectCard
          img={Game}
          title="Tic Tac Toe Game"
          link="https://tictactoebykuceli.netlify.app/"
        />
        <ProjectCard
          img={Starwars}
          title="Star Wars App"
          link="https://starwarsappbykuceli.netlify.app"
        />
        <ProjectCard
          img={Profile}
          title="Profile Search App"
          link="https://profile-search-app-by-kuceli.netlify.app"
        />
      </ul>
    </div>
  );
};

export default MiniProjects;
