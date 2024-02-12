import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./Eyebrow";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <div id="about-us">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US" />
            <p className="md:text-body-lg text-body-lg font-normal text-white">
              Simplicity is the ultimate sophistication. At Space Design
              Interiors, we believe in capturing the spirit of the client and
              the essence of the space. We believe that beauty should not be a
              privilege reserved for those born with a platinum spoon, but
              should be a basic requirement for everyone.
            </p>
            <p className="md:text-body-lg text-body-lg font-normal text-white">
              We turn dreams into reality. Our team of experienced and talented
              designers are specialises in residential, commercial, and
              hospitality projects. We specialize in luxury interior design,
              with a focus on creating stunning spaces that are both functional
              and beautiful.
            </p>
            <p className="md:text-body-lg text-body-lg font-normal text-white">
              We, as organization has already grown its business to mega-cities
              such as Faridabad, Gurgaon, Delhi NCR, after barely 6 years of
              operation. In the short time, we've been in business, we've
              completed over 100+ successful projects and are diligently trying
              to complete more.
            </p>
            <p className="md:text-body-lg text-body-lg font-normal text-white">
              We aim to deliver a superior quality of services at par with the
              global market and latest trends. Our services include:
            </p>
            <ul className="font-normal text-body-lg">
              <li>&#x2022; Interior Design</li>
              <li>&#x2022; Turnkey Projects</li>
              <li>&#x2022; Consultancy</li>
            </ul>
            <p className="md:text-body-lg text-body-lg font-normal text-white">
              Consult Space Design Interiors today!
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative mt-12">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
