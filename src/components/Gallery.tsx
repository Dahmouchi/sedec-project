"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import {motion,AnimatePresence } from "framer-motion";
interface GalleryImage {
  src: string
  aspect_ratio?: number
  category?: string
}

interface GalleryProps {
  images: GalleryImage[]
  categories?: string[]
  selectedCategory?: string
  onCategoryChange?: (category: string) => void
}

export default function Gallery({ images, categories = [], selectedCategory = "all", onCategoryChange }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState(selectedCategory)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return images
    }
    return images.filter((img) => img.category === activeCategory)
  }, [images, activeCategory])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    onCategoryChange?.(category)
  }

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length)
    }
  }

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index)
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }

  return (
    <div className="w-full">
      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeCategory === "all" ? "bg-[#BD9A68] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Tous
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category ? "bg-[#BD9A68] text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <div
              className="relative bg-gray-200"
              style={{
                aspectRatio: image.aspect_ratio || "1",
              }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucune image trouvée pour cette catégorie.</p>
        </div>
      )}

      {selectedImageIndex !== null && (
         <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 puts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrevImage}
              className="absolute left-5 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] flex justify-center items-center"
            >
              <Image
                 src={filteredImages[selectedImageIndex].src || "/placeholder.svg"}
               alt={`Gallery image ${selectedImageIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain rounded-lg"
              />
            </motion.div>

            <button
              onClick={handleNextImage}
              className="absolute right-5 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      )}
     
    </div>
  )
}
