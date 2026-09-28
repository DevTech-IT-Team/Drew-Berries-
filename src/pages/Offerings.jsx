import React, { useState, useEffect } from "react";
import {
  Leaf,
  Info,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Sprout,
  GraduationCap,
} from "lucide-react";
import Arugula from "../../public/offerings/arugula.png"
import Kale from "../../public/offerings/kale.png"
import Beets from "../../public/offerings/beet.png"
import Broccoli from "../../public/offerings/broccoli.png"
import Cress from "../../public/offerings/cress.png"
import Peas from "../../public/offerings/peas.png"
import Radish from "../../public/offerings/radish.png"
import Sunflower from "../../public/offerings/sunflower.png"
import BeeKeeping from "../../public/offerings/bee-keeping.png"

const OFFERINGS = [
  {
    id: "1",
    name: "Arugula",
    description:
      "Arugula is a peppery green that is packed with nutrients.",
    creditValue: 3,
    category: "Produce",
    imageUrl: Arugula,
  },
  {
    id: "2",
    name: "Beet",
    description:
      "Beets are a root vegetable that are packed with nutrients.",
    creditValue: 3,
    category: "Pantry",
    imageUrl: Beets,
  },
  {
    id: "3",
    name: "Broccoli",
    description:
      "Broccoli is a cruciferous vegetable that is packed with nutrients.",
    creditValue: 3,
    category: "Produce",
    imageUrl: Broccoli,
  },
  {
    id: "4",
    name: "Cress",
    description:
      "Cress is a peppery green that is packed with nutrients.",
    creditValue: 3,
    category: "Pantry",
    imageUrl: Cress,
  },
  {
    id: "5",
    name: "Peas",
    description:
      "Peas are a legume that are packed with nutrients.",
    creditValue: 3,
    category: "Pantry",
    imageUrl: Peas,
  },
  {
    id: "6",
    name: "Radishes",
    description:
      "Radishes are a root vegetable that are peppery and crisp.",
    creditValue: 3,
    category: "Produce",
    imageUrl: Radish,
  },
  {
    id: "7",
    name: "Sunflower",
    description:
      "Sunflowers are a bright and cheerful flower that are a great addition to any garden.",
    creditValue: 3,
    category: "Produce",
    imageUrl: Sunflower,
  },
  {
    id: "8",
    name: "Kale",
    description:
      "A voluntary exchange of freshly harvested seasonal berries from our Oregon fields, supporting sustainable food production and land stewardship.",
    creditValue: 12,
    category: "Produce",
    imageUrl: Kale,
  },
  {
    id: "9",
    name: "Beekeeping Consultation",
    description:
      "Expert guidance on establishing and maintaining healthy beehives, covering swarm management, honey harvesting, and pollinator conservation practices.",
    creditValue: 45,
    category: "Education",
    imageUrl: BeeKeeping,
  },
];

const CATEGORIES = ["All", "Produce", "Pantry", "Education"];

const Offerings = () => {
  useEffect(() => {
    document.title = "Farm Offerings - Drew's Berries Private Harvest";
  }, []);

  const [filter, setFilter] = useState("All");

  const filteredOfferings =
    filter === "All"
      ? OFFERINGS
      : OFFERINGS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-in fade-in duration-1000 pb-32 font-sans selection:bg-[#4B5320]/10 overflow-x-hidden">
      {/* Editorial Header */}
      <section className="relative pt-10 pb-20 px-6 border-b border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#4B5320]"></div>
            <div className="w-16 h-px border-t border-dashed border-stone-200"></div>
            <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.5em]">
              The Drusus Foundation Association
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-stone-900 mb-6 tracking-tighter leading-none">
            Member{" "}
            <span className=" font-light text-[#4B5320]">Participation.</span>
          </h1>
          <p className="text-stone-500 max-w-3xl mx-auto text-lg md:text-xl font-serif italic leading-relaxed">
            "A private community centered on stewardship of the land, shared
            resources, and personal responsibility."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        {/* Purpose Statement */}
        <div className="mb-24 p-10 bg-[#4B5320]/5 rounded-[40px] border border-[#4B5320]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4 italic">
                Vision & Mission
              </h2>
              <p className="text-stone-600 font-serif leading-relaxed italic">
                Our purpose is to cultivate a values-based community centered on
                stewardship of the land, shared resources, mutual aid, and
                personal responsibility. We operate through a private membership
                structure rather than a public commercial model.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                <Sprout className="mx-auto text-[#4B5320] mb-2" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Sustainability
                </span>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                <GraduationCap
                  className="mx-auto text-[#4B5320] mb-2"
                  size={24}
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Education
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-max px-4">
          <div className="flex flex-wrap gap-3 justify-center bg-white/80 backdrop-blur-md p-3 rounded-full shadow-2xl border border-stone-200/50">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${filter === cat
                  ? "bg-[#4B5320] text-white border-[#4B5320] shadow-lg shadow-[#4B5320]/20"
                  : "bg-white text-stone-400 hover:text-[#4B5320] border-stone-100"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredOfferings.map((item) => {
            const isLastCard = item.id === "9";

            return (
              <div key={item.id} className="group flex flex-col">

                {/* 1. SEPARATED CONDITIONAL TEMPLATE VIEWS TO ENSURE NO RENDER OVERRIDES */}
                {!isLastCard ? (
                  /* Standard display frame template for pre-cropped illustration cards 1-8 */
                  <div className="relative w-full aspect-[1.35/1] bg-transparent">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 transition-all duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?q=80&w=1000&auto=format&fit=crop";
                      }}
                    />

                    {/* Category tag bubble */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-white/95 backdrop-blur-md text-[#4B5320] px-4 py-1.5 rounded-full border border-stone-100/40 shadow-xs">
                        <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Hardcoded mathematical oval layer container specifically for the 9th image */
                  <div className="relative w-full aspect-[1.35/1] rounded-full overflow-hidden isolate border-4 border-white shadow-xl bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-100 transition-all duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?q=80&w=1000&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-stone-900/[0.01] group-hover:bg-transparent transition-colors pointer-events-none rounded-full" />

                    {/* Category tag bubble */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-white/95 backdrop-blur-md text-[#4B5320] px-4 py-1.5 rounded-full border border-stone-100/40 shadow-xs">
                        <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card descriptions and text blocks layout properties */}
                <div className="mt-8 px-2 grow flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h2 className="text-2xl md:text-3xl font-serif text-stone-900 tracking-tight leading-tight">
                      {item.name}
                    </h2>
                    <div className="text-right shrink-0">
                      <span className="text-2xl font-serif italic text-[#4B5320] block">
                        {item.creditValue}
                      </span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-stone-400">
                        Exchange Credits
                      </span>
                    </div>
                  </div>
                  <p className="text-stone-500 text-base leading-relaxed font-serif italic mb-8 border-l-2 border-[#4B5320]/10 pl-6 grow">
                    {item.description}
                  </p>
                  <button className="w-full bg-[#4B5320] text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-lg shadow-[#4B5320]/10 hover:bg-stone-900 transition-all flex items-center justify-center gap-3 group/btn">
                    Request Produce
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Association Stewardship & Hardship Notice */}
        <section className="mt-40 bg-stone-900 rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden">
          <Leaf className="absolute -bottom-10 -right-10 w-64 h-64 text-[#4B5320]/10 -rotate-12" />
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-[#4B5320] flex items-center justify-center">
                <HeartPulse size={20} className="text-white" />
              </div>
              <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.4em]">
                Stewardship & Care
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">
              Hardship Support & <br />
              <span className="italic text-stone-400">Mutual Care</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-400 font-serif italic text-lg">
              <p>
                "The association seeks to support individuals and families
                facing financial hardship by offering alternative participation
                options and assistance programs, consistent with our values of
                dignity and compassion."
              </p>
              <p>
                "Credits may be acquired by members and used for farm products,
                activities, and overnight stays. All participation is voluntary
                and restricted to the private association."
              </p>
            </div>
            <div className="mt-16 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5">
                <ShieldCheck size={16} className="text-[#4B5320]" />
                <span className="text-[10px] uppercase tracking-widest font-black text-white/60">
                  Private Membership Model
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5">
                <Info size={16} className="text-[#4B5320]" />
                <span className="text-[10px] uppercase tracking-widest font-black text-white/60">
                  Rural Oregon Sanctuary
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offerings;