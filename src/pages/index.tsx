import type { NextPage } from "next";
import Seo from "@/components/general/Seo";
import { Layout } from "@/components/layouts/default";
import Hero from "@/components/home/Hero";
import Contact from "@/components/home/Contact";
import Testimonial from "@/components/home/Testimonial";
import Experience from "@/components/home/Experience";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Portfolio" />
      <Hero />
      <Experience />
      <Services />
      <Projects />
      <Testimonial />
      <Contact />
    </Layout>
  );
};

export default Home;
