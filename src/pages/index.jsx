import React from "react";

import Metrics from "../components/Metrics";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Services from "../components/Services";
import Works from "../components/Works";

const IndexPage = () => (
  <Layout>
    <Seo />
    <Hero />
    <About />
    <Metrics />
    <Services />
    <Works />
  </Layout>
);

export default IndexPage;
