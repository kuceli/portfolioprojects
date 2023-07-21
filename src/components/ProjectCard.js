import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ProjectCard = (prop) => {
  return (
    <div>
      <div>
        <ul>
          <li className="relative w-[300px] sm:w-[380px] h-[255px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer">
            <div>
              <div className="max-w-sm overflow-hidden bg-cover bg-no-repeat">
                <img
                  src={prop.img}
                  alt="Mealy"
                  className="sm:max-w-sm transition duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <a
                href={prop.link}
                target="_blank"
                className="shadow-md flex  justify-between items-center px-5 w-[89%] bg-[#ffffff] text-[#333333] h-14 absolute bottom-3 mx-5 cursor-pointer"
              >
                <div>
                  <p className="font-medium">{prop.title}</p>
                </div>

                <BsFillArrowRightCircleFill size={25} />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
