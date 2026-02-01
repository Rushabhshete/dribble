import HeroTabs from "./hero-tabs";

export default function Hero() {
  return (
    <section className="flex px-20 ">
      {/* LEFT CONTENT */}
      <div className="justify-start">
        <h1 className="text-6xl font-bold ">
          Discover the <br />
          World&apos;s Top <br />
          Designers
        </h1>

        <p className="my-3">
          Explore work from the most talented and accomplished designers ready
          to take on your next project.
        </p>
<HeroTabs />
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <div>
          <video
            src="https://cdn.dribbble.com/uploads/67237/original/d4432dc2031a2679a6ab6258be815c15.mp4?1765339787"
            autoPlay
            loop
            muted
            playsInline
            className="w-150 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
