import Card from "../components/Card";
import Hero from "../components/Hero";
import Back from "../components/Back";
import Footer from "../components/Footer";
import data from "../data/data";

export default function Gallery() {
  const cards = data.map((card) => {
    return <Card img={card.img} isBig={card.isBig} key={card.id} />;
  });

  return (
    <main className="relative bg-[#480CA8]">
      <Back />
      <Hero />
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
