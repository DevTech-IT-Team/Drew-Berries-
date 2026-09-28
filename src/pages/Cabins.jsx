import React, { useEffect } from "react";
import { Users, Moon, ArrowRight, ShieldCheck, Leaf, HeartHandshake } from "lucide-react";
import Oak from "../../public/oak-meadows-large.png";
import SmallOak from '../../public/oak-meadows-cabin.png';
import sunrise from '../../public/sunrise-pond.png';
import pondservice from '../../public/pond-before-and-after.png';
const CABINS = [
  {
    id: 'c1',
    name: 'The Cedar Sanctuary',
    description: 'A simple timber frame cabin overlooking the north creek. Ideal for prayer, reflection, and quiet stewardship.',
    capacity: 2,
    creditContribution: 120,
    imageUrl: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'c2',
    name: 'Elderberry Hill Loft',
    description: 'Rustic accommodations nestled within our berry orchard. Designed for members to experience the rhythm of the farm.',
    capacity: 4,
    creditContribution: 180,
    imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'c3',
    name: 'Oak Meadow Cabin',
    description: 'A simple timber frame cabin overlooking the north creek. Ideal for prayer, reflection, and quiet stewardship.',
    capacity: 4,
    creditContribution: 180,
    imageUrl: Oak
  },
  {
    id: 'c4',
    name: 'The North Creek Cabin',
    description: 'A simple timber frame cabin overlooking the north creek. Ideal for prayer, reflection, and quiet stewardship.',
    capacity: 2,
    creditContribution: 120,
    imageUrl: SmallOak
  },
  {
    id: 'c5',
    name: 'The Pond ',
    description: 'A simple timber frame cabin overlooking the north creek. Ideal for prayer, reflection, and quiet stewardship.',
    capacity: 2,
    creditContribution: 120,
    imageUrl: sunrise
  },
  {
    id: 'c6',
    name: 'The Pond Service',
    description: 'A simple timber frame cabin overlooking the north creek. Ideal for prayer, reflection, and quiet stewardship.',
    capacity: 2,
    creditContribution: 120,
    imageUrl: pondservice
  },

];

const Cabins = () => {
  useEffect(() => {
    document.title = "Farm Cabins - Stay at Drew's Berries, Grants Pass";
  }, []);

  return (
    <div className="bg-[#fdfcf9] min-h-screen animate-in fade-in duration-1000 pb-32 font-sans selection:bg-[#4B5320]/10 overflow-x-hidden">

      {/* Hero Header - Reflecting Private Association Aesthetic */}
      <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop"
            alt="Rural Oregon Forest"
            className="w-full h-full object-cover saturate-[0.3] brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-stone-900/60 via-transparent to-[#fdfcf9]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#A3AD73]"></div>
            <div className="w-16 h-px border-t border-dashed border-white/40"></div>
            <span className="text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.5em]">
              Drusus Foundation Association
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-white mb-6 -tracking-normal">
            Farm <span className="font-light text-stone-200">Participation.</span>
          </h1>
          <p className="text-stone-200 max-w-2xl mx-auto text-lg md:text-xl font-serif italic leading-relaxed">
            "Simple overnight stays in Rural Oregon for members to support land stewardship and community learning."
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-[-10vh] relative z-20">

        {/* Cabins Grid - Using Credit-Based Exchange Language */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {CABINS.map((cabin, idx) => (
            <div key={cabin.id} className={`flex flex-col group ${idx % 2 !== 0 ? 'lg:mt-32' : ''}`}>

              <div className="relative aspect-16/11 rounded-[48px] overflow-hidden shadow-2xl border-10 border-white transition-all duration-700">
                <img
                  src={cabin.imageUrl}
                  alt={cabin.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-3000 ease-out"
                />
                <div className="absolute top-8 left-8">
                  <div className="bg-[#4B5320] text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-xl border border-white/10">
                    <ShieldCheck size={14} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Private Member Stay</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 text-[#4B5320]">
                      <div className="w-8 h-px bg-[#4B5320]/30" />
                      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Resource {idx + 1}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">{cabin.name}</h2>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm flex flex-col items-center md:items-end">
                    <span className="text-3xl font-serif italic text-[#4B5320]">{cabin.creditContribution}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Exchange Credits</span>
                  </div>
                </div>

                <p className="text-stone-600 text-lg leading-relaxed font-serif italic mb-8 border-l-2 border-[#4B5320]/20 pl-6">
                  {cabin.description} Residencies facilitate mutual aid and personal responsibility through shared farm experiences.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-50 shadow-sm">
                    <Users className="text-[#4B5320]" size={20} />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500">{cabin.capacity} Members</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-50 shadow-sm">
                    <Moon className="text-[#4B5320]" size={20} />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Off-Grid</span>
                  </div>
                </div>

                <button className="w-full md:w-auto bg-[#4B5320] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-xl shadow-[#4B5320]/20 hover:bg-stone-900 transition-all flex items-center justify-center gap-4 group/btn">
                  Request Reservation
                  <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements Focus: Mission and Hardship Support */}
        <section className="mt-48 bg-stone-900 rounded-[64px] p-12 md:p-24 text-white overflow-hidden relative">
          <Leaf className="absolute -top-12 -right-12 w-64 h-64 text-[#4B5320]/10 rotate-45" />

          <div className="max-w-4xl relative z-10">
            <span className="text-[#A3AD73] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Association Values</span>
            <h3 className="text-4xl md:text-6xl font-serif mb-12 tracking-tight">Stewardship & <br /><span className="italic text-stone-400">Mutual Care</span></h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <HeartHandshake className="text-[#A3AD73]" size={32} />
                <h4 className="text-xl font-serif">Mutual Aid</h4>
                <p className="text-stone-400 text-sm leading-relaxed">We provide hardship support options for members, maintaining dignity and compassion in all interactions.</p>
              </div>
              <div className="space-y-4">
                <Leaf className="text-[#A3AD73]" size={32} />
                <h4 className="text-xl font-serif">Shared Resources</h4>
                <p className="text-stone-400 text-sm leading-relaxed">Access farm products via our credit-based exchange system, supporting sustainable food production.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="text-[#A3AD73]" size={32} />
                <h4 className="text-xl font-serif">Education</h4>
                <p className="text-stone-400 text-sm leading-relaxed">Participation includes on-site educational opportunities in composting, baking, and agriculture.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cabins;