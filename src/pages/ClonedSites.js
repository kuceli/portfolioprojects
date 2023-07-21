import React from "react";
import Todo from "../assets/todo.png";
import Netflix from "../assets/netflix.png";
import Udemy from "../assets/udemy.png";
import Instagram from "../assets/instagram.png";
import Google from "../assets/google.png";
import ProjectCard from "../components/ProjectCard";

const ClonedSites = () => {
  return (
    <div>
      <div className="px-5 lg:px-20">
        <h1 className="text-4xl my-8 font-medium">Cloned Sites</h1>
        <ul className="flex flex-col lg:flex-row flex-wrap justify-between gap-y-10 items-center">
          {/* <ul className="grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-10"> */}
          <ProjectCard
            img={Netflix}
            title="Netflix Landing Page"
            link="https://netflixbykuceli.netlify.app/"
          />
          <ProjectCard
            img={Udemy}
            title="Udemy Landing Page"
            link="https://udemybykuceli.netlify.app"
          />
          <ProjectCard
            img={Instagram}
            title="Instagram Home Page"
            link="https://instagrambykuceli.netlify.app/"
          />

          <ProjectCard
            img={Google}
            title="Google Search Page"
            link="https://googlebykuceli.netlify.app"
          />
          <ProjectCard
            img={Netflix}
            title="Netflix Landing Page"
            link="https://netflixbykuceli.netlify.app/"
          />
          <ProjectCard
            img={Udemy}
            title="Udemy Landing Page"
            link="https://udemybykuceli.netlify.app"
          />
        </ul>
      </div>
    </div>
  );
};

export default ClonedSites;
