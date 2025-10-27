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

 

    return (
        <>
            <Layout headerStyle={7}>
                <div className="w-full mb-28 lg:h-[60vh] h-[50vh] bg-cover bg-center relative"
                style={{backgroundImage:"url(/images/bg.jpg)"}}>
                    <div className="w-full h-full bg-black/40 flex items-center justify-center">
                        <div className="title text-white text-7xl font-serif text-center">Nos Villas en Bois</div>
                    </div>
                </div>
                <ProjectFilter col="col-lg-6 col-md-6" />
            </Layout >
        </>
    )
}