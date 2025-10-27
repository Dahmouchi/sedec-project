/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
export default function PergolaGridView({ item, col }) {

    return (
        <>
            <div className={col}>
                <div className="project-item">
                    <div className="project-thumb">
                        <Link href={`/pergola/${item.id}`}>
                        <div className="w-full lg:h-[50vh] h-[25vh] rounded-xl">
                            <img src={`/images/${item.img}`} alt="" className="w-full h-full bg-cover"/>

                        </div>
                        </Link>
                    </div>
                    <div className="project-content">
                        <h3 className="title"><Link href={`/pergola/${item.id}`}>{item.title}</Link></h3>
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
