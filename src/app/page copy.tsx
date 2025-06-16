'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselImages = [
  '/home1.jpg',
  '/home2.jpg',
  '/home3.jpg',
  '/home4.jpg',
  '/home5.jpg',
  '/home6.jpg',
  '/home7.jpg',
];

export default function HomePage() {

  const offers = [
    { id: 1, name: 'PIR rPP Plastic', quantity: 25, country: 'USA', price: 200, image: '/product1.jpg' },
    { id: 2, name: 'PCR rPP Plastic', quantity: 40, country: 'Germany', price: 300, image: '/product2.jpg' },
    { id: 3, name: 'PIR rPP Plastic', quantity: 15, country: 'Russia', price: 150, image: '/product3.jpg' },
    { id: 4, name: 'PIR rPP Plastic', quantity: 60, country: 'Spain', price: 250, image: '/product4.jpg' },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-cycle every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselImages.length);

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#EED3B1] via-[#47663B] to-[#1F4529] text-white py-24 md:py-40 px-6 md:px-12 rounded-xl mb-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-pulse hover:scale-105 transition-transform duration-500">
            The Premier B2B Marketplace for Recyclable Plastics
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Enabling seamless, direct trade between verified suppliers and buyers of recyclable plastics — driving efficiency, transparency, and sustainability in the plastics industry.
          </p>
          <Link href="/register" className="inline-block mt-4 px-8 py-3 bg-[#EED3B1] text-[#1F4529] font-semibold rounded-lg shadow-lg hover:bg-opacity-90 transition">
            Join Us
          </Link>
        </div>

        {/* Carousel */}
        <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
          <div className="w-full max-w-lg h-64 md:h-96 overflow-hidden rounded-lg shadow-xl">
            <Image
              src={carouselImages[current]}
              alt={`Slide ${current + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-700"
            />
          </div>
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg text-white text-7xl"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-shadow shadow-md hover:shadow-lg text-white text-7xl hover:text-gray-300"
          >
            ›
          </button>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-300 bg-opacity-50'} transition focus:outline-none`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <div className="text-center mt-12 mb-2">
        <h2 className="text-4xl font-bold text-[#1F4529]">How We Work</h2>
      </div>
      <section className="flex flex-col md:flex-row bg-white py-16 px-6 md:px-12 gap-12">
        {/* Sellers Box */}
        <div className="md:w-1/2 p-8 bg-[#EED3B1] rounded-xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#1F4529]">For Sellers</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xl font-semibold text-[#47663B]">List your inventory</p>
                <p className="text-base text-gray-600">Showcase recycled plastic grades in under a minute.</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#47663B]">Maximise your earnings</p>
                <p className="text-base text-gray-600">Connect with buyers instantly to secure top market rates.</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#47663B]">Reach Global Partners</p>
                <p className="text-base text-gray-600">Ship directly to clients both locally and around the world.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/iphone.png"
              alt="Sellers feature on iPhone"
              width={240}
              height={480}
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Buyers Box */}
        <div className="md:w-1/2 p-8 bg-[#EED3B1] rounded-xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 flex justify-center order-last md:order-first">
            <Image
              src="/iphone.png"
              alt="Buyers feature on iPhone"
              width={240}
              height={480}
              className="rounded-2xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#1F4529]">For Buyers</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xl font-semibold text-[#47663B]">Explore Available Materials</p>
                <p className="text-base text-gray-600">Find the exact recycled-plastic grades you need.</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#47663B]">Negotiate Instantly</p>
                <p className="text-base text-gray-600">Engage suppliers to secure optimal pricing in real time.</p>
              </div>
              <div>
                <p className="text-xl font-semibold text-[#47663B]">Order Securely</p>
                <p className="text-base text-gray-600">Complete purchases with trusted vendors for local or global delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Offers Section */}
      <div className="text-center mt-4 mb-8">
        <h2 className="text-4xl font-bold text-[#1F4529]">New Offers</h2>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 mb-12">
        {offers.map(offer => (
          <Link
            key={offer.id}
            href="/products"
            className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <Image src={offer.image} alt={offer.name} className="h-40 w-full object-cover" />
            <div className="p-4 space-y-2">
              <h4 className="text-xl font-semibold text-[#1F4529]">{offer.name}</h4>
              <p className="text-sm text-gray-600">Quantity: {offer.quantity} MT</p>
              <p className="text-sm text-gray-600">Country: {offer.country}</p>
              <p className="text-sm font-medium text-[#47663B]">${offer.price} / T</p>
            </div>
          </Link>
        ))}
      </section>
      <div className="text-center">
        <Link href="/marketplace" className="inline-block px-6 py-3 text-[#47663B] border border-[#47663B] bg-white font-semibold rounded-lg shadow-sm hover:shadow-md transition">
          See More
        </Link>
      </div>
    </>
  );
}


// async function handleFileUpload(file) {
//   const form = new FormData();
//   form.append('file', file);

//   const res = await fetch('/files/upload', {
//     method: 'POST',
//     body: form,
//   });
//   const data = await res.json();
//   if (!res.ok) throw new Error(data.error || 'Upload failed');
//   return data.url; // your S3 URL
// }
