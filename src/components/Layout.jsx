import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Header from "./Header";
import Footer from "./Footer";
import ContactUsModal from "./ContactUsModal";

const Layout = ({ children }) => {
  const [showContactUsModal, setShowContactUsModal] = useState(false);

  useEffect(() => {
    const storedContactDetails = localStorage.getItem("contactDetails");
    if (storedContactDetails) {
      setShowContactUsModal(false);
    } else {
      setShowContactUsModal(true);
    }
  }, []);

  return (
    <>
      <Helmet>
        <script src="https://gumroad.com/js/gumroad.js" />
      </Helmet>
      <Header />
      <div>
        <main>
          <ContactUsModal
            showContactUsModal={showContactUsModal}
            setShowContactUsModal={setShowContactUsModal}
          />
          <>{children}</>
        </main>
      </div>
      <Footer setShowContactUsModal={setShowContactUsModal} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  setShowContactUsModal: PropTypes.func,
};

export default Layout;
