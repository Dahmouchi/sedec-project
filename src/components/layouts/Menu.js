import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Menu({ isShow }) {
    const router = useRouter()

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }


    return (
        <>

            <ul className="navigation">
                <li className="menu-item-has-children">
                    <Link href="#">Home</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index-2">Home Two</Link></li>
                        <li><Link href="/index-3">Home Three</Link></li>
                        <li><Link href="/index-4">Home Four</Link></li>
                        <li><Link href="/index-5">Home Five</Link></li>
                        <li><Link href="/index-6">Home Six</Link></li>
                        <li><Link href="/index-7">Home Seven</Link></li>
                        <li><Link href="/index-8">Home Eight</Link></li>
                    </ul>


                </li>
                <li className="menu-item-has-children">
                    <Link href="#">About</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/overview">Overview</Link></li>
                        <li><Link href="/mission">Mission</Link></li>
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/team-details">Team Profile</Link></li>
                    </ul>

                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Projects</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/project">Projects Two Col</Link></li>
                        <li><Link href="/project-two">Projects Three Col</Link></li>
                        <li><Link href="/project-three">Projects Four Col</Link></li>
                        <li><Link href="/project/1">Projects Single</Link></li>
                    </ul>

                </li>
                <li className="menu-item-has-children">
                    <Link href="#">blog</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-sidebar">Blog Grid Sidebar</Link></li>
                        <li><Link href="/blog-list">Blog Standard</Link></li>
                        <li><Link href="/blog/1">Blog Single</Link></li>
                    </ul>

                </li>
                <li className="menu-item-has-children">
                    <Link href="#">Pages</Link>
                    <ul className="sub-menu" >
                        <li><Link href="/sirvices">Services</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li><Link href="/404">404 Error</Link></li>
                    </ul>

                </li>
                <li><Link href="/contact">contacts</Link></li>
            </ul>

        </>
    )
}
