import React from "react";

export default function Intro() {
  return (
    <>
      <section className="flex flex-col space-y-16 bg-[#480CA8] lg:space-y-32">
        <article className="relative mb-16 max-w-[66vw] self-end lg:mb-32">
          <video
            className="absolute aspect-[3/4] rounded-bl-2xl object-cover opacity-0 shadow-2xl transition-opacity lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/videos/IMG_3656.MOV"
            muted
          ></video>
          <img
            className="aspect-[3/4] rounded-bl-2xl object-cover shadow-2xl lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3656.JPG"
            alt=""
          />
        </article>

        <article className="relative mx-8 max-w-[33vw] self-end">
          <video
            className="absolute aspect-[3/4] rounded-bl-2xl object-cover opacity-0 shadow-2xl transition-opacity lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/videos/IMG_3656.MOV"
            muted
          ></video>
          <img
            className="aspect-[3/4] rounded-2xl object-cover lg:aspect-[4/3]"
            shadow-2xl
            src="/ViborgUdenforMitVindue/assets/images/IMG_3656.JPG"
            alt=""
          />
        </article>

        <article className="relative max-w-[33vw] self-center">
          <video
            className="absolute aspect-[3/4] rounded-bl-2xl object-cover opacity-0 shadow-2xl transition-opacity lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/videos/IMG_3657.MOV"
            muted
          ></video>
          <img
            className="aspect-[3/4] rounded-2xl object-cover shadow-2xl lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3657.JPG"
            alt=""
          />
        </article>

        <article className="mx-8 max-w-[33vw] self-start">
          <img
            className="aspect-[3/4] rounded-2xl object-cover shadow-2xl lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3658.JPG"
            alt=""
          />
        </article>
      </section>

      <section className="flex min-h-screen items-center bg-[#480CA8]">
        <article>
          <h2 className="px-8 text-4xl font-light text-[#4CC9F0] lg:text-7xl">
            Ahh, Viborg. En smuk by i midten af Jylland. Især udenfor mit
            vindue.
          </h2>
        </article>
      </section>

      <section className="flex flex-col space-y-16 bg-[#480CA8] lg:space-y-32">
        <article className="mx-8 max-w-[33vw] self-start">
          <img
            className="aspect-[3/4] rounded-2xl object-cover shadow-2xl lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3662.JPG"
            alt=""
          />
        </article>
        <article className="max-w-[33vw] self-center">
          <img
            className="aspect-[3/4] rounded-2xl object-cover shadow-2xl lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3664.JPG"
            alt=""
          />
        </article>

        <article className="mx-8 max-w-[33vw] self-end">
          <img
            className="mb-16 aspect-[3/4] rounded-2xl object-cover shadow-2xl lg:mb-32 lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3664.JPG"
            alt=""
          />
        </article>

        <article className="mb-64 max-w-[66vw] self-end">
          <img
            className="aspect-[3/4] rounded-tl-2xl object-cover shadow-2xl lg:aspect-[4/3]"
            src="/ViborgUdenforMitVindue/assets/images/IMG_3664.JPG"
            alt=""
          />
        </article>
      </section>
    </>
  );
}
