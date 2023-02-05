import type { NextPage } from "next";
import Seo from "@/components/general/Seo";
import { Layout } from "@/components/layouts/default";
import Hero from "@/components/home/Hero";
import Contact from "@/components/home/Contact";
import Testimonial from "@/components/home/Testimonial";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Portfolio" />
      <Hero />
      <Testimonial />
      <Contact />
    </Layout>
  );
};

export default Home;
