/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React from 'react';

const DestinationCard = ({img,title,content}:any) => {
    return (
        <div className="new-top-desti-thumb m-2">
        <img src={img} alt="img" className="rounded-xl"/>
        <Link href="/destination/destination-details" className="icon img-popup2">
        <i className="bi bi-plus-lg"></i>
        </Link>
       
    </div>
    );
};

export default DestinationCard;