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
              src="/images/scondinave.jpg"
              alt="Chalet Scandinavian"
              className="w-full h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Nos Villas
            </h4 >
          </Link>
        </li>

        {/* Chalet 2 */}
        <li className="flex flex-col items-center text-center w-full ">
          <Link href="/charpente" className="block">
            <img
              src="/images/charpente.jpg"
              alt="Chalet Toubkal"
              className="w-full h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
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
              src="/images/reel/Nos-metiers.jpg"
              alt="Chalet M&M"
              className="w-full h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Pergola
            </h4>
          </Link>
        </li>

        {/* Chalet 4 */}
        <li className="flex flex-col items-center text-center w-full ">
          <Link href="/batiments-modulaires" className="block">
            <img
              src="/images/merc/img101.jpg"
              alt="Chalet Moroccan Touch"
              className="w-full h-[27vh] object-cover rounded-lg mb-3 transition-transform duration-300 hover:scale-105"
            />
            <h4 className="font-serif font-semibold text-gray-500 hover:text-amber-800">
              Bâtiments Modulaire
            </h4>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Test;
