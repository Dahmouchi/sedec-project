import React from 'react';
import DestinationCard from './DestinationCard';
import Image from 'next/image';
import Link from 'next/link';

const Destination3 = () => {
    return (
<section className="top-destination-section section-padding fix mt-16">
            
            <div className="container">
                <div className="section-title text-center ">
                    <span className="sub-title wow fadeInUp">Aperçu</span>
                    <h2 className="wow fadeInUp  title" data-wow-delay=".3s">
                        Galerie SEDEC
                    </h2>
                </div>
                <div className="new-top-destination-wrapper pt-14">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6">

                                <DestinationCard
                                    img="/images/2.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard>

                                <DestinationCard
                                    img="/images/4.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard>


                                </div>
                                <div className="col-md-6">

                                <div className='lg:block hidden'><DestinationCard
                                    img="/images/1.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard></div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6">

                                <DestinationCard
                                    img="/images/5.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard>

                                <DestinationCard
                                    img="/images/6.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard>

                                </div>
                                <div className="col-md-6">
                                <DestinationCard
                                    img="/images/7.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard>

                                <DestinationCard
                                    img="/images/8.jpg"
                                    title="United Kingdom"
                                    content="174,688 Travelers"
                                ></DestinationCard>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center mt-8'>
                         <Link href="/galerie" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">Voir plus</div>
                                            <div className="btn_t2">Voir plus</div>
                                        </div>
                                    </div>
                                </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Destination3;