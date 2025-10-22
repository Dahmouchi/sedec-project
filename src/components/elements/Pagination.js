export default function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>
            <div className="pagination-wrap">
                <nav aria-label="Page navigation example">
                    <ul className="pagination list-wrap">

                        {getPaginationGroup.map((item, index) => {
                            return (
                                <li
                                    onClick={() => handleActive(item)}
                                    key={index} className={
                                        currentPage === item
                                            ? "page-item active"
                                            : "page-item"
                                    }
                                >
                                    <a className="page-link">{item}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </>
    )
}
