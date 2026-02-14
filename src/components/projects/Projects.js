import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-6">
        <div className="px-6">
          <ProjectsCard
            title="Promo Table Covers"
            link="https://www.promotablecovers.com/"
            category="Website"
            image={workImgOne}
          />
          <ProjectsCard
            title="Bloomin Promotions"
            link="https://www.bloominpromotions.com/"
            category="Website"
            image={workImgTwo}
          />
         
        </div>
        <div className="px-6">
           <ProjectsCard
            title="Winstonleather"
            link="https://www.winstonleather.com/"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Fieldsmfg"
            link="https://www.fieldsmfg.com/"
            category="Website"
            image={workImgFour}
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-6">
        {/* <div className="px-6">
           <ProjectsCard
            title="Playingcardsondemand(PCOD)"
            link="https://playingcardsondemand.ewizsaas.com/"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Thekanatagroup"
            link="https://www.thekanatagroup.com/"
            category="Website"
            image={workImgFour}
          />
        </div> */}
        {/* <div className="px-6">
           <ProjectsCard
            title="Playingcardsondemand(PCOD)"
            link="https://playingcardsondemand.ewizsaas.com/"
            category="Website"
            image={workImgThree}
          />
          <ProjectsCard
            title="Thekanatagroup"
            link="https://www.thekanatagroup.com/"
            category="Website"
            image={workImgFour}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
