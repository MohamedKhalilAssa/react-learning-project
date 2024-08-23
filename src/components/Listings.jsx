import Listing from "./Listing";
import React, { useState, useEffect } from "react";

const Listings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch data");
      })
      .then((dataF) => {
        setData(dataF);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((job) => {
            if (job.id < 4) return <Listing key={job.id} job={job} />;
            return null; // Ensure that something is returned in case the condition is false
          })}
        </div>
      </div>
    </section>
  );
};

export default Listings;
