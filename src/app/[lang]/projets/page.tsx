/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import projectData from "@/lib/project.json"
import ProjectFilter from "@/components/elements/ProjectFilter"
import Layout from "@/components/layouts/Layout"
export default function Project() {

    const [filter, setFilter] = useState({ status: '', type: '', location: '' })

    // Filter the users by status, type, and location
    const filteredUsers = projectData.filter(user => {
        return (
            user.status.toLowerCase().includes(filter.status.toLowerCase()) &&
            user.type.toLowerCase().includes(filter.type.toLowerCase()) &&
            user.location.toLowerCase().includes(filter.location.toLowerCase())
        )
    })

    // Get a list of unique values for status, type, and location
    const uniqueStatus = [...new Set(projectData.map(user => user.status))]
    const uniqueTypes = [...new Set(projectData.map(user => user.type))]
    const uniqueLocation = [...new Set(projectData.map(user => user.location))]


    const [currentPage, setCurrentPage] = useState(1)
    const showLimit = 4,
        showPagination = 4

    const [pagination, setPagination] = useState<any>([])
    const [limit, setLimit] = useState(showLimit)
    const [pages, setPages] = useState(Math.ceil(filteredUsers.length / limit))
    // console.log(pagination)

    useEffect(() => {
        cratePagination()
    }, [limit, pages, filteredUsers.length])

    const cratePagination = () => {
        // set pagination
        const arr = new Array(Math.ceil(filteredUsers.length / limit))           
            .map((_, idx) => idx + 1)

        setPagination(arr)
        setPages(Math.ceil(filteredUsers.length / limit))
    }

    const startIndex = currentPage * limit - limit
    const endIndex = startIndex + limit

    const getPaginatedProducts = filteredUsers.slice(startIndex, endIndex)


    const start = Math.floor((currentPage - 1) / showPagination) * showPagination
    const end = start + showPagination
    const getPaginationGroup = pagination.slice(start, end)

    const next = () => {
        setCurrentPage((page) => page + 1)
    }

    const prev = () => {
        setCurrentPage((page) => page - 1)
    }

    const handleActive = (item:any) => {
        setCurrentPage(item)
    }

    return (
        <>
            <Layout headerStyle={7}>
                <div className="w-full mb-28 h-[60vh] bg-cover bg-center relative"
                style={{backgroundImage:"url(/images/bg.jpg)"}}>
                    <div className="w-full h-full bg-black/40 flex items-center justify-center">
                        <div className="title text-white text-7xl font-serif">Nos Chalets</div>
                    </div>
                </div>
                <ProjectFilter col="col-lg-6 col-md-6" />


            </Layout >
        </>
    )
}