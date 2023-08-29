import React, { useState } from "react";

import Card from "../components/Card";
import Hero from "../components/Hero";
import Back from "../components/Back";
import Footer from "../components/Footer";
import data from "../data/data";

export default function Gallery() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const cards = data.map((card) => {
    return (
      <Card
        img={card.img}
        video={card.video}
        isBig={card.isBig}
        key={card.id}
        setEnlargedImage={setEnlargedImage}
      />
    );
  });

  return (
    <main className="relative bg-[#480CA8]">
      <Back />
      <Hero />
      {enlargedImage && (
        <section className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-75">
          <video
            className="max-h-full max-w-full"
            src={enlargedImage}
            alt="Enlarged"
            autoPlay
          />
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute right-8 top-4 rounded bg-black bg-opacity-50 px-4 py-2 text-xl text-white lg:text-4xl"
          >
            Tilbage
          </button>
        </section>
      )}
      <div className="flex flex-col">
        <section className="grid max-w-[66vw] grid-cols-4 grid-rows-2 self-end overflow-hidden rounded-bl-2xl shadow-2xl">
          {cards}
        </section>
        <section className="mb-16 mt-16 grid max-w-[66vw] grid-cols-4 grid-rows-2 overflow-hidden rounded-r-2xl shadow-2xl">
          {cards}
        </section>
      </div>
      <Footer />
    </main>
  );
}
