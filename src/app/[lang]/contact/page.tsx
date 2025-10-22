import Layout from "@/components/layouts/Layout";
import Blog2 from "@/components/sections/Blog2";
import Newsletter from "@/components/sections/Newsletter";
import Link from "next/link";
export default function Contact() {
  return (
    <>
      <Layout headerStyle={7}>
        <section className="banner-area-five3 banner-bg-four3 max-h-[30vh] mb-16">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="banner-content">
                  <h1
                    className="title wow  fadeInUp  text-white text-center"
                    data-wow-delay=".2s"
                  >
                    <span className="text-2xl lg:text-6xl">
                      Contactez-nous et Construisons Ensemble
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-scroll-down">
            <Link href="#matterport" className="section-link">
              <span />
              <span />
              <span />
            </Link>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* contact-info */}
        <Newsletter />
        <Blog2 />
      </Layout>
    </>
  );
}
