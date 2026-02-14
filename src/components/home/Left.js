import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Khushbu-Web-developer-Resume.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Frontend Developer", "UI Developer", "React.js Developer","Performance-Focused UI Engineer"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-5/5 bg-white rounded-2xl shadow-testShwdow z-10">
      <div className="w-8/12 h-5/5 py-3 px-3 m-auto">
        <a href="/">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={bannerImg}
            loading="priority"
            alt="Logo"
          />
        </a>
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 pb-10">
          <h1 className="secClr text-4xl font-semibold">Khushbu Singh</h1>
          <p className="text-sm firstClr tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl hidden">
              <FaGithub />
            </span>
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl">
              <a href="https://www.linkedin.com/in/khushbu-singh-b901751b9" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl hidden">
              <SiYoutubemusic />
            </span>
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl hidden">
              <BsFacebook />
            </span>
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl hidden">
              <FiInstagram />
            </span>
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl hidden">
              <AiFillTwitterCircle />
            </span>
            <span className="secClr hover:firstClr duration-300 cursor-pointer text-xl">
              <a href="mailto:khushbusingh7348@gmail.com" rel="noreferrer">
              <FiMail />
              </a>
            </span>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 secClr hover:firstClr duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <a
            href="tel:+91-9834694381"
            className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 secClr hover:firstClr duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
            Contact me <FiSend />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Left;
