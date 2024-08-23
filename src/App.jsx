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
      <Listings />
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="/jobs"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
