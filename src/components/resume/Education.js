import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      
      {/* Experience */}
      <div className="col-span-9">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Oct 2021 – Present"
          title="Web Developer"
          subTitle="Powerweave IT Services"
          des="Developing and maintaining scalable, high-performance web applications using React.js, JavaScript, HTML, and CSS. Built reusable UI components, integrated REST APIs, optimized performance (20% faster load times),Emailer, and ensured cross-browser responsiveness. Collaborated closely with backend, QA, and product teams to deliver production-ready solutions."
        />
      </div>

      {/* Education */}
      <div className="col-span-9 mt-10">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2019 – 2022"
          title="B.Tech in Computer Science"
          subTitle="Dr. A.P.J. Abdul Kalam Technical University (UPTU), Lucknow, India"
          des="Relevant coursework included Object-Oriented Programming, Web Technologies, and Software Development."
        />
      </div>
      <div className="col-span-9 mt-10">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2017 – 2019"
          title="Diploma in Computer Science Engg."
          subTitle="Government Girls Polytechnic (GGP), Gorakhpur, India"
          des="Relevant coursework included C, Web Technologies ."
        />
      </div>
    </div>
  );
};

export default Education;
