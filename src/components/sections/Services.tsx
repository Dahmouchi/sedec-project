/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const Services=()=> {
    return (
        <>
           <section className="services-area section section-pb-100">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-8">
        <div className="section-title text-center mb-55">
          <span className="sub-title">Nos Offres</span>
          <h2 className="title">Nos Solutions</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="services-item">
          <div className=" my-4 flex items-center justify-center">
            <Link href="#"><img src="/assets/img/images/services_01.png" alt="Solution 1" /></Link>
          </div>
          <div className="services-content">
            <h2 className="title"><Link href="#">Solution 1</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <Link href="#" className="text-btn">En savoir plus</Link>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="services-item">
          <div className=" my-4 flex items-center justify-center">
            <Link href="#"><img src="/assets/img/images/services_02.png" alt="Solution 2" /></Link>
          </div>
          <div className="services-content">
            <h2 className="title"><Link href="#">Solution 2</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <Link href="#" className="text-btn">En savoir plus</Link>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-10">
        <div className="services-item">
          <div className=" my-4 flex items-center justify-center">
            <Link href="#"><img src="/assets/img/images/services_03.png" alt="Solution 3" /></Link>
          </div>
          <div className="services-content">
            <h2 className="title"><Link href="#">Solution 3</Link></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <Link href="#" className="text-btn">En savoir plus</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default Services;