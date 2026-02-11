"use client";
import { useRef } from "react";
import Link from "next/link";
import cardsData from "./data/cardsData";

const categories = [
  "Discover",
  "Animation",
  "Branding",
  "Illustration",
  "Mobile",
  "Print",
  "Product Design",
  "Typography",
  "web Design"
];

function formatNumber(value) {
  return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);
}

export default function DiscoverSection() {
  const colorInputRef = useRef(null);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <div className="rounded-2xl bg-gray-100 p-4 md:p-6 flex flex-col md:flex-row md:items-center gap-4 mb-10">
        <button className="w-fit rounded-full bg-white border border-gray-200 px-5 py-3 text-base font-semibold flex items-center gap-2">
          <span className="text-violet-500">*</span>
          Start a Project Brief
          <span className="rounded-full bg-pink-500 text-white text-xs px-2 py-0.5">NEW</span>
        </button>
        <p className="text-gray-700 text-sm">
          Tell us what you need and instantly connect with world-class talent ready to work on your project.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-12">
        <select className="rounded-2xl border border-gray-300 px-6 py-3 text-sm font-medium bg-white outline-none cursor-pointer">
          <option value="popular">Popular</option>
          <option value="new">New & Noteworthy</option>
        </select>

        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-5 py-3 ${category === "Discover" ? "bg-gray-100" : "bg-transparent"}`}
            >
              {category}
            </button>
          ))}
          <button className="px-3 py-3">&gt;</button>
        </div>

        <button className="ml-auto rounded-full border border-gray-300 px-7 py-3 text-sm font-medium">
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        <div>
          <label className="block text-sm md:text-[2rem] mb-3">Tags</label>
          <input className="rounded-2xl border border-gray-300 px-5 py-6 text-gray-400 text-sm"/>
        </div>

        <div>
          <label className="block text-sm md:text-[2rem] mb-3">Color</label>
          <div 
            className="flex items-center gap-3 rounded-2xl border border-gray-300 px-5 py-6 text-gray-400 text-sm cursor-pointer"
            onClick={() => colorInputRef.current?.click()}
          >
            <input 
              type="text" 
              placeholder="Enter hex or select" 
              className="bg-transparent outline-none w-full text-gray-900 placeholder:text-gray-400 cursor-pointer"
              readOnly
            />
            <input 
              type="color" 
              ref={colorInputRef} 
              className="sr-only" 
            />
          </div>
        </div>

        <div>
          <label className="block text-3xl md:text-[2rem] mb-3">Timeframe</label>
          <button className="w-full text-left rounded-2xl border border-gray-300 px-5 py-6 text-2xl font-medium">
            Now <span className="float-right text-base">v</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card) => (
          <article key={card.shot_url} className="group">
            <Link
              href={card.shot_url}
              target="_blank"
              className="block overflow-hidden rounded-2xl bg-gray-100 mb-3 aspect-[16/10]"
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="h-full w-full grid place-items-center text-gray-400 px-4 text-center">No preview image</div>
              )}
            </Link>

            <div className="flex items-center gap-3">
              <img src={card.thumbnail} alt={card.author} className="h-8 w-8 rounded-full object-cover" />
              <Link href={card.author_url} target="_blank" className="font-semibold truncate hover:underline">
                {card.author}
              </Link>
              {card.pro && <span className="text-xs font-semibold bg-gray-900 text-white rounded px-1.5 py-0.5">PRO</span>}
              {card.team && <span className="text-xs font-semibold bg-blue-100 text-blue-700 rounded px-1.5 py-0.5">TEAM</span>}
              <div className="ml-auto text-sm text-gray-500">
                {formatNumber(card.likes)} likes - {formatNumber(card.views)} views
              </div>
            </div>

            <h3 className="mt-2 text-sm font-medium">{card.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
