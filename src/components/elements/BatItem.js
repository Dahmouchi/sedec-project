/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
export default function BatGridView({ item, col }) {

    return (
        <>
            <div className={col}>
                <div className="project-item">
                    <div className="project-thumb">
                        <Link href={`/batiments-modulaires/${item.id}`}>
                        <div className="w-full h-[25vh] lg:h-[50vh] rounded-xl">
                            <img src={`${item.img}`} alt="" className="w-full h-full bg-cover"/>

                        </div>
                        </Link>
                    </div>
                    <div className="project-content">
                        <h3 className="title"><Link href={`/batiments-modulaires/${item.id}`}>{item.title}</Link></h3>
                        <span>{item.location}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
