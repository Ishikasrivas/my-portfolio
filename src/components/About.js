import React from "react";
import { Link } from "react-scroll";
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4x1 font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Ishika Srivas
              </h2>
              <p className="mb-4 text-accent">Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I am a passionate front-end developer who recently entered the
                field with a strong enthusiasm for creating engaging and
                interactive web experiences. As a fresher, I am eager to
                contribute my skills and knowledge to build visually appealing
                and user-friendly websites.
                <br />I have a solid foundation in HTML, CSS, and JavaScript,
                and I enjoy exploring modern front-end frameworks like React. I
                am constantly learning and staying updated with the latest
                industry trends to enhance my development skills.
              </p>
            </div>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="btn btn-md bg-accent hover:bg-accent-hover transition-all"
            >
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
