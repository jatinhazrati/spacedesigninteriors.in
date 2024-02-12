import React from "react";
import { Link } from "gatsby";

import Logo from "../images/logos/brand-logo.jpeg";
import Button from "./Button";

const Header = () => {
  const navigation = [
    { name: "About", href: "#about-us" },
    { name: "Services", href: "#our-services" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-4 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <Link to="/">
              <img className="h-14 w-auto" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex flex-row gap-6">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-md font-medium hover:text-primary px-4"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <Button label="CONTACT US" link="#contact-us" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
