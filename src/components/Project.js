import React from "react";

const Project = ({ item }) => {
  const { image, name, link } = item;

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="mb-8">
        <img
          className="rounded-2x1"
          src={image}
          alt={name}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3"></p>
      <h3 className="text-2x1 font-semibold capitalize mb-3">{name}</h3>
    </div>
  );
};

export default Project;
