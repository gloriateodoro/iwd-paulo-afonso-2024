"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

interface CarouselProps {
  speakers: { url: string; name: string; description: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ speakers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? speakers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-5 flex flex-col gap-2 items-center">
      <h1 className="text-3xl font-bold pb-4 pt-4 text-gray-100">
        Palestrantes
      </h1>
      <div className="carousel flex items-center text-gray-100">
        <button onClick={prevSlide}>
          <Image
            src="/previous.svg"
            alt="Carousel Previous Icon"
            width={50}
            height={50}
          />
        </button>
        <div className="flex flex-col md:flex-row justify-center items-center mb-4">
          <img
            src={speakers[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
            className=" h-72 w-72 object-cover"
          />
          <div className="flex flex-col justify-center pl-6 pb-6 gap-2">
            <h2 className="text-lg font-bold pt-6">
              {speakers[currentIndex].name}
            </h2>
            <p className="text-md max-w-96">
              {speakers[currentIndex].description}
            </p>
          </div>
        </div>
        <button onClick={nextSlide}>
          <Image
            src="/next.svg"
            alt="Carousel Next Icon"
            className=""
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Carousel), { ssr: false });
