import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroVideo: file(relativePath: { eq: "hero-video.mp4" }) {
        publicURL
      }
    }
  `);

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-28 items-center text-center gap-10 py-24">
          <h1 className="font-display md:text-display-xl text-display-xl">
            Flourish <span className="italic">your homes</span> with luxury
            living
          </h1>
          <h6 className="col-span-8 md:text-display-xs text-body-lg font-medium text-white max-w-[800px]">
            CREATIVE SOLUTIONS BY{" "}
            <span className="text-primary">PROFESSIONAL DESIGNERS</span>
          </h6>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-white max-w-[800px]">
            Looking for a luxurious and high-end interior designer in Faridabad,
            Gurgaon or Delhi NCR? Look no further!
          </p>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-white max-w-[800px]">
            We are committed to perfection. Enjoy a seamless journey from
            concept to execution. Unleash the potential of your space with us!
          </p>
        </div>
      </div>
      <div className="relative">
        <video autoPlay loop muted playsInline className="w-full">
          <source src={data.heroVideo.publicURL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
