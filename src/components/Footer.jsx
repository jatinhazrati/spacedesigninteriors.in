import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import Button from "./Button";

const Footer = ({ setShowContactUsModal }) => {
  const data = useStaticQuery(graphql`
    {
      allSocialJson {
        nodes {
          id
          name
          href
          icon {
            publicURL
          }
        }
      }
    }
  `);

  return (
    <footer id="contact-us">
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Kick-start your dream home with us
            </h3>
            <div className="flex items-start cursor-pointer">
              <Button
                label="REQUEST A CALLBACK"
                size="lg"
                onClick={() => setShowContactUsModal(true)}
              />
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-60 lg:pl-48">
            <div className="flex flex-col gap-2">
              <a
                href="https://maps.app.goo.gl/6BtCzAidDn3pSU5m7"
                target="_blank"
                rel="noreferrer"
                className="text-body-lg font-light text-white"
              >
                Opp. Puri Aanand-vilas, Near Aravali International School,
                Sector-81 Faridabad, Haryana, India 121002
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-md font-light text-primary">
                Email us at
              </p>
              <a
                className="text-display-xs font-display font-normal text-white"
                href="mailto:contact@spacedesigninteriors.in"
              >
                contact@spacedesigninteriors.in
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-md font-light text-primary">
                If you're in hurry, quick call us
              </p>
              <a
                className="text-display-xs font-display font-normal text-white"
                href="tel:+91 9891299445"
              >
                +91 9891299445
              </a>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10">
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} Space Design Interiors
          </div>
          <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center">
              <p className="text-body-sm font-semibold tracking-widest text-primary pr-4">
                CONNECT
              </p>
              <hr className="w-16 text-neutral-300"></hr>
            </div>
            <div className="flex flex-row  items-center gap-6">
              {data.allSocialJson.nodes.map((node) => (
                <a
                  href={node.href}
                  key={node.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="h-10 w-10"
                    src={node.icon.publicURL}
                    alt={node.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
