import React from "react";
// import woman image
import WomanImg from "../assets/img/banner-woman2.webp.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-3 lg:mb-4">
              Hey, I'm Ishika 👋
            </p>

            <h1 className="text-2xl leading-[28px] md:text-3xl md:leading-tight lg:text-5xl lg:leading-[1.2] font-bold md:tracking-[-1px] text-center lg:text-left">
              I Build & Design Websites
            </h1>
            {/* write something about myself */}
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              My objective is to utilize my expertise in creating visually
              appealing and user-friendly websites. I am proficient in various
              programming languages, including HTML, CSS, Bootstrap, JavaScript,
              and ReactJS, and have a solid understanding of responsive design.
              My goal is to work for a company where I can apply my skills and
              knowledge to develop innovative web solutions that meet the needs
              of clients and users.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg">
              Work with me
            </button>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-half">
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
