<<<<<<< HEAD
import React from "react";
import { FiMail } from "react-icons/fi";

// import contact data
import { contact } from "../data";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ishikasrivas35@gmail.com";
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">Contact me</h2>
          <p className="subtitle">
            I'm flexible and available just about any time you need me to work.
            I am simply looking forward to joining the team and helping whenever
            I am most needed.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div
                    className="text-accent rounded-sm w-14 h-14 flex items-center justify-center mt-2 mb-4 lg:mb-0 cursor-pointer"
                    onClick={handleEmailClick}
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="email" placeholder="Your email" />
            </div>
            <input className="input" type="text" placeholder="Subject" />
            <textarea
              className="textarea"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
=======
import React from "react";
import { FiMail } from "react-icons/fi";

// import contact data
import { contact } from "../data";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ishikasrivas35@gmail.com";
  };

  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">Contact me</h2>
          <p className="subtitle">
            I'm flexible and available just about any time you need me to work.
            I am simply looking forward to joining the team and helping whenever
            I am most needed.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div
                    className="text-accent rounded-sm w-14 h-14 flex items-center justify-center mt-2 mb-4 lg:mb-0 cursor-pointer"
                    onClick={handleEmailClick}
                  >
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="email" placeholder="Your email" />
            </div>
            <input className="input" type="text" placeholder="Subject" />
            <textarea
              className="textarea"
              placeholder="Your message"
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
>>>>>>> f03922b83c71463d4cd743097d60d84b56742f82
