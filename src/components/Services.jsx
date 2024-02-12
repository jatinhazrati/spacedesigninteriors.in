import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";

import Eyebrow from "./Eyebrow";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <div id="our-services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                We provide the <span className="italic">best solutions</span>{" "}
                for your dream home
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Interior Design & Execution"
              description="Elevate your living space with our comprehensive interior design and execution services. Our team of skilled designers is dedicated to bringing your vision to life, meticulously crafting every detail to perfection. From conceptualization to completion, we ensure a seamless process, turning your dreams into stunning reality."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Architectural & Building Renovation"
              description="Transform your space with our expert architectural and building renovation solutions. Whether you're looking to revitalize an existing structure or embark on a new architectural endeavor, our team has the expertise to deliver exceptional results. With a focus on innovation and functionality, we breathe new life into spaces, enhancing their aesthetic appeal and functionality."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Construction Management"
              description="Streamline your construction projects with our professional construction management services. From project planning to on-site coordination, we oversee every aspect of the construction process with precision and efficiency. With a commitment to quality and timeliness, we ensure that your project is completed to the highest standards, on time and within budget."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
