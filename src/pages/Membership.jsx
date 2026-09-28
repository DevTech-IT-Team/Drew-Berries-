import React, { useEffect } from "react";
import { ShieldCheck, HeartHandshake, Leaf, Coins, ArrowRight, Info } from 'lucide-react';

function Membership() {
  useEffect(() => {
    document.title = "Farm Membership - Join Drew's Berries Association";
  }, []);

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-in fade-in duration-1000 pb-24 font-sans selection:bg-[#4B5320]/10">
      
      {/* Hero Header: Private Association Focus */}
      <section className="bg-stone-900 text-white py-14 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="Oregon Farm" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#4B5320]"></div>
            <div className="w-16 h-px border-t border-dashed border-white/20"></div>
            <span className="text-[#A3AD73] text-[10px] font-black uppercase tracking-[0.5em]">
              The Drusus Foundation
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 tracking-tighter leading-none">
            Become an <span className="font-light text-stone-400">Associate.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 leading-relaxed font-serif italic max-w-2xl mx-auto">
            "We are not a store open to the public. We are a private association of members sharing in the stewardship of this land."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Educational Content Area */}
        <div className="lg:col-span-7 space-y-20">
          
          {/* Section 1: PMA Definition */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="text-[#4B5320]" size={32} />
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">Understanding Private Membership</h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 font-serif italic">
              A Private Membership Association (PMA) is a constitutionally protected right to associate for peaceful and beneficial purposes. Members interact within a private domain, distinct from public commerce.
            </p>
            <div className="bg-white border border-stone-100 p-8 rounded-4xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4B5320]"></div>
              <h4 className="font-black text-[10px] uppercase tracking-widest text-[#4B5320] mb-3">Private Capacity Agreement</h4>
              <p className="text-stone-600 leading-relaxed">
                By becoming a member, you agree to interact with the Association in a private capacity, utilizing a system of voluntary exchange rather than commercial retail transactions.
              </p>
            </div>
          </section>

          {/* Section 2: The Credit System */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <Coins className="text-[#4B5320]" size={32} />
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">The Credit Exchange System</h2>
            </div>
            <p className="text-stone-600 text-lg leading-relaxed mb-8 font-serif italic">
              To facilitate resource sharing without traditional currency-based commerce, we utilize an Association Credit system.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Credits represent your contribution to the Association's sustainability.",
                "Credits are exchanged for harvest offerings and cabin stays.",
                "Credits can be acquired through contributions or gifted between members.",
                "Unused credits bolster our internal Mutual Aid fund for members in need."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-50 shadow-sm group hover:border-[#4B5320]/20 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-[#4B5320]/10 flex items-center justify-center shrink-0 mt-1">
                    <Leaf size={12} className="text-[#4B5320]" />
                  </div>
                  <span className="text-sm text-stone-600 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Values & Mutual Aid */}
          <section className="bg-stone-900 text-white p-12 rounded-[48px] relative overflow-hidden">
            <HeartHandshake className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5" />
            <h3 className="text-2xl md:text-3xl font-serif mb-6 italic">Mutual Aid & Hardship Support</h3>
            <p className="text-stone-400 leading-relaxed mb-8">
              True to our mission of mutual care, the association provides hardship support options for individuals and families facing financial challenges, maintaining dignity and compassion in all interactions.
            </p>
            <div className="flex items-center gap-3 py-3 px-6 bg-white/5 rounded-full w-fit border border-white/10">
              <Info size={14} className="text-[#A3AD73]" />
              <span className="text-[10px] uppercase tracking-widest font-black text-stone-300">Community Stewardship</span>
            </div>
          </section>
        </div>

        {/* Floating Membership Application Form */}
        <div className="lg:col-span-5">
          <div className="bg-white p-10 rounded-[48px] shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-stone-100 sticky top-24">
            <h3 className="text-3xl font-serif text-stone-900 mb-2">Apply to Join</h3>
            <p className="text-stone-400 text-sm mb-8 font-serif italic">Review takes approximately 48 hours.</p>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4B5320]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4B5320]/20 focus:bg-white transition-all" 
                  placeholder="Enter your legal name" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4B5320]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4B5320]/20 focus:bg-white transition-all" 
                  placeholder="your@email.com" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#4B5320]">Stewardship Interest</label>
                <textarea 
                  className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#4B5320]/20 focus:bg-white transition-all h-32 resize-none" 
                  placeholder="Tell us why you wish to participate in our private association..."
                ></textarea>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-[#4B5320]/5 rounded-2xl">
                <input 
                  type="checkbox" 
                  className="h-5 w-5 rounded-lg border-stone-300 text-[#4B5320] focus:ring-[#4B5320]" 
                />
                <span className="text-[10px] text-stone-500 font-bold uppercase tracking-tight leading-tight">
                  I agree to the Private Membership Association Bylaws & Standards.
                </span>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#4B5320] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-xl shadow-[#4B5320]/20 hover:bg-stone-900 transition-all flex items-center justify-center gap-4 group"
              >
                Submit Application
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
            
            <p className="text-[9px] text-stone-400 mt-8 text-center uppercase tracking-widest font-black">
              Rural Oregon Association • Non-Public
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;