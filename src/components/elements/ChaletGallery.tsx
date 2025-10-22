/* eslint-disable @next/next/no-img-element */
// components/ChaletGallery.tsx
"use client";
import { useState } from "react";

interface ChaletGalleryProps {
  gallery: {
    chambres: string[];
    salon: string[];
    exterieure: string[];
  };
}

export default function ChaletGallery({ gallery }: ChaletGalleryProps) {
  const [activeTab, setActiveTab] = useState<"chambres" | "salon" | "exterieure">("chambres");

  const categories = ["chambres", "salon", "exterieure"] as const;

  return (
    <div className="w-full mt-6 container my-16">
      {/* Tabs */}
       <div className="w-full flex justify-center my-10 text-center ">
                            <div className="section-title">
                                <h2 className="title">Galerie</h2>
                                {/*<Link href="project" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">D</div>
                                            <div className="btn_t2">Explore all</div>
                                        </div>
                                    </div>
                                </Link>*/}
                            </div>
                        </div>
      <div className="flex gap-4 border-b border-gray-300 pb-2 mb-4 justify-center items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`capitalize px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
              activeTab === cat
                ? "bg-[#BD9A68] text-white"
                : "text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery[activeTab].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${activeTab} ${i}`}
            className="rounded-lg object-cover w-full h-40 md:h-56 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
