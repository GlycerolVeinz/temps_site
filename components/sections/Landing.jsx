import React from "react";
import Image from 'next/image';

export default function Landing({landingRef, backroundImage, bandName}) {
    return (
        <section id="landing" ref={landingRef} className="h-screen relative">
            {/* Fallback background color if image doesn't load */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900 to-stone-950"></div>

            {/* Background image with error handling */}
            {backroundImage && (
              <Image
                className="absolute inset-0 bg-center bg-cover z-10"
                src={backroundImage}
                layout="fill"
                objectFit="cover"
                alt="Band Background"
              ></Image>
            )}

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

            {/* Main content */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4 select-none cursor-default">
                {bandName}
              </h1>
            </div>
        </section>
    );
}