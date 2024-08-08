import React from "react";
let data = [];
fetch("http://localhost:8000/jobs").then((res) => {
  if (res.ok)
    return res.json().then((dataF) => {
      data = dataF;
    });
});
const Listings = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((job) => {
        if (job.id < 4)
          return (
            <div className="bg-white rounded-xl shadow-md relative">
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{job.type}</div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">{job.description}</div>

                <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    {job.location}
                  </div>
                  <a
                    href="job.html"
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          )
      })}
    </div>
  );
};

export default Listings;