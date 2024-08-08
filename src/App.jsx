import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardContainer from "@/components/CardContainer";
import Card from "@/components/Card";
import Listings from "@/components/Listings";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CardContainer>
        <Card color="blue" title="For Developers" button="Browse Jobs" />
        <Card color="gray" title="For Employers" button="Post a Job" />
      </CardContainer>
      {/* <!-- Developers and Employers --> */}

      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
            
            <Listings />
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
