import React from "react";

const Card = ({ color = "gray", title, button }) => {
  return (
    <div className={`bg-${color}-100 p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">For Developers</h2>
      <p className="mt-2 mb-4">{title}</p>
      <a
        href="/jobs.html"
        className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
      >
        {button}
      </a>
    </div>
  );
};

export default Card;
