/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const Team=()=> {
    return (
        <>
            <section className="team-area section-pt-130 section-pb-140">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title">Leadership</span>
                                <h2 className="title">Meet with our amazing team members</h2>
                            </div>
                        </div>
                    </div>
                    <div className="team-item-wrap">
                        <div className="row justify-content-center">
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img01.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Johan Johnson</Link></h3>
                                        <span>Architect</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img02.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Jacob Jones</Link></h3>
                                        <span>Founder</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img03.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Eleanor Pena</Link></h3>
                                        <span>Head of Design</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img04.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Bessie Cooper</Link></h3>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img05.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Kim Smith</Link></h3>
                                        <span>Marketer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img06.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Courtney Henry</Link></h3>
                                        <span>Account Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img07.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Theresa Webb</Link></h3>
                                        <span>Architect</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-4 col-sm-6">
                                <div className="team-item">
                                    <div className="team-thumb">
                                        <Link href="team-details"><img src="/assets/img/team/team_img08.jpg" alt="" /></Link>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title"><Link href="team-details">Belva Boyd</Link></h3>
                                        <span>Architect</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-more-btn text-center mt-30">
                        <Link href="team" className="btn transparent-btn">
                            <div className="btn_m">
                                <div className="btn_c">
                                    <div className="btn_t1">View all members</div>
                                    <div className="btn_t2">View all members</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Team;
