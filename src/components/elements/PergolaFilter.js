/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PergolaGridView from "@/components/elements/Pergolatem"
import Pagination from "@/components/elements/Pagination"
import { useEffect, useState } from "react"
import projectData from "@/lib/pergola.json"
export default function PergolaFilter({ col }) {

    const [filter, setFilter] = useState({ status: '', type: '', location: '' })

    // Filter the users by status, type, and location
    const filteredUsers = projectData.filter(user => {
        return (
            user.status.toLowerCase().includes(filter.status.toLowerCase()) &&
            user.type.toLowerCase().includes(filter.type.toLowerCase()) &&
            user.location.toLowerCase().includes(filter.location.toLowerCase())
        )
    })

  

    let [currentPage, setCurrentPage] = useState(1)
    let showLimit = 4,
        showPagination = 4

    let [pagination, setPagination] = useState([])
    let [limit, setLimit] = useState(showLimit)
    let [pages, setPages] = useState(Math.ceil(filteredUsers.length / limit))
    // console.log(pagination)

    useEffect(() => {
        cratePagination()
    }, [limit, pages, filteredUsers.length])

    const cratePagination = () => {
        // set pagination
        let arr = new Array(Math.ceil(filteredUsers.length / limit))
            .fill()
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(filteredUsers.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit

    const getPaginatedProducts = filteredUsers.slice(startIndex, endIndex)


  

    return (
        <>

            <section className="inner-project-area section-pb-140">
                <div className="container">
                   

                    {getPaginatedProducts.length === 0 && (
                        <h3>No Products Found </h3>
                    )}


                    <div className="project-item-wrap">
                        <div className="row">
                            {getPaginatedProducts.map((item, i) => (
                                <PergolaGridView item={item} col={col} key={i} />
                            ))}
                        </div>
                    </div>
                   {/*<Pagination
                        getPaginationGroup={
                            getPaginationGroup
                        }
                        currentPage={currentPage}
                        pages={pages}
                        next={next}
                        prev={prev}
                        handleActive={handleActive}
                    />

                    {getPaginationGroup.length <= 0 ? null : (
                        <p>
                            show {currentPage} of {pages}
                        </p>
                    )} */} 
                </div>
            </section>
        </>
    )
}