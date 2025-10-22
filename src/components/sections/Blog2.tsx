/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Blog2 = () => {
  return (
    <>
      <section className="blog-area-two pb-16">
        <div className="container">
          <div className=" flex justify-center items-center mt-16">
            <div className="">
              <div className="section-title text-center mb-50">
                <h2 className="title">VISITEZ NOTRE SHOWROOM</h2>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4">
            <div className="col-span-1">
              <div className="h-full flex flex-col justify-center p-8 rounded-2xl">
                <div className="contact-info-item">
                  <span className="sub-title">Bureaux, usine et showroom</span>
                  <h2 className="title">
                    Avenue Hassan II - Km 13,300 Témara - Maroc
                  </h2>
                  <ul className="list-wrap">
                    <li>
                      <Link href="mailto:contact@sedec.ma">
                        contact@sedec.ma
                      </Link>
                    </li>
                    <li>
                      <Link href="tel:0537741119">+ 212 (0) 537 741 119</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="">
                <div className="">
                  <div id="">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1197793627125!2d-6.935446524489701!3d33.91231667320999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70d7ec25ff809%3A0xf9c1349fae898e2d!2sS.E.D.E.C.%20(Societe%20D&#39;Exploitation%20Des%20Ets%20Carreres-Durisol)!5e0!3m2!1sfr!2sma!4v1761134093765!5m2!1sfr!2sma"
                      loading="lazy"
                      className="w-full h-[50vh] rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog2;
