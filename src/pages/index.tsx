import type { NextPage } from "next";
import Seo from "@/components/general/Seo";
import { Layout } from "@/components/layouts/default";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Portfolio" />
      <Hero />
    </Layout>
  );
};

export default Home;
