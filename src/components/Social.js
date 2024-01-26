<<<<<<< HEAD
import React from "react";
//import social data
import { social } from "../data";
const Social = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
            href={item.link}
            target="_blanck"
            rel="noopener noreferrer"
          >
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
=======
import React from "react";
//import social data
import { social } from "../data";
const Social = () => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
          <li
            className="flex justify-center items-center text-accent"
            key={index}
            href={item.link}
            target="_blanck"
            rel="noopener noreferrer"
          >
            <a className="text-base" href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
>>>>>>> f03922b83c71463d4cd743097d60d84b56742f82
