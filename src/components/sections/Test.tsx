/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Test = () => {
  return (
    <div className="container mt-8 lg:mt-24">
      <div className="flex justify-between lg:flex-row flex-col items-center gap-8  w-full max-w-7xl mx-auto ">
        {/* Chalet 1 */}
        <li className="flex flex-col items-center text-center w-full ">
          <Link href="/projets" className="block">
            <img
              src="/optimized/scondinave.webp"
              alt="Chalet Scandinavian"
              className="w-[45vh] h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Villas en Bois
            </h4 >
          </Link>
        </li>

        {/* Chalet 2 */}
        <li className="flex flex-col items-center text-center w-full ">
          <Link href="/charpente" className="block">
            <img
              src="/optimized/charpente/charpente1.webp"
              alt="Chalet Toubkal"
              className="w-[45vh] h-[27vh]  object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Charpente
            </h4>
          </Link>
        </li>

        {/* Chalet 3 */}
        <li className="flex flex-col items-center text-center w-full ">
          <Link href="/pergola" className="block">
            <img
              src="/optimized/pergola4.webp"
              alt="Chalet M&M"
              className="w-[45vh] h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Pergola
            </h4>
          </Link>
        </li>

        {/* Chalet 4 */}
        <li className="flex flex-col items-center text-center w-full lg:px-0">
          <Link href="/batiments-modulaires" className="block">
            <img
              src="/optimized/merc/img176.webp"
              alt="Chalet Moroccan Touch"
              className="w-[45vh] h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Bâtiments Modulaires
            </h4>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Test;
