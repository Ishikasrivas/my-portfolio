import React from "react";
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary flex justify-center">
      <div className="contain">
        {/* section title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
            What I do for clients
          </h2>
          <p className="subtitle">
            I bring designs to life using HTML, CSS, and JavaScript, focusing on
            clean code and smooth interactions for an engaging user experience.
          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div
                className="bg-secondary p-6 rounded-2xl text-center flex flex-col justify-between"
                key={index}
              >
                {/* icon */}
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mx-auto mb-4">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p className="text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
