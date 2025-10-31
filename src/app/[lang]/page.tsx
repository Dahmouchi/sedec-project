/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import Layout from "@/components/layouts/Layout";
import { getDictionary } from "./dictionaries";
import Banner4 from "@/components/sections/Banner4"
import Blog2 from "@/components/sections/Blog2"
import Brand from "@/components/sections/Brand";
import Newsletter from "@/components/sections/Newsletter"
import Project4 from "@/components/sections/Project4"
import Roadmap from "@/components/sections/Roadmap";
import Team from "@/components/sections/Team"
import Video2 from "@/components/sections/Video2"
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Destination3 from "@/components/sections/Gallery";
import Test from "@/components/sections/Test";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "fr" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  return (
    <>
            <Layout headerStyle={7}>
                <Banner4 />
                <Video2 />
                <Test />
                <About />
                {/*<Brand />
                <div className="section-pb-140"></div>*/}
                <Project4 />
                <Destination3 />
                <Roadmap />
                <Services />
                 {/*<Team />*/}
                <Newsletter />
                <Blog2 />
            </Layout>
        </>
  );
}