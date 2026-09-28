import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Us - Drew's Berries in Grants Pass, Oregon";
  }, []);

  return (
    <div className="bg-[#fdfcf9] min-h-screen pb-24 font-sans text-stone-800">
      <div className="relative pt-10 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none z-0">
          <img
            src="https://www.transparenttextures.com/patterns/felt.png"
            alt="texture"
            className="w-full h-full"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4B5320]"></div>
            <div className="w-12 h-px border-t border-dashed border-[#4B5320]/40"></div>
            <span className="text-[#4B5320] text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]">
              Established Foundations
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6 tracking-tight">
            Our{" "}
            <span className="font-medium text-[#4B5320]">
              Foundation
            </span>
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-serif italic leading-relaxed">
            "Discover the history and intent behind the Drusus Foundation."
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 space-y-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight leading-tight">
              What <span className="italic">"Drusus"</span> Means
            </h2>
            <div className="w-16 h-0.5 bg-[#4B5320]/20"></div>
            <p className="text-stone-600 leading-relaxed text-lg">
              Derived from the Roman word for{" "}
              <strong>"strong"</strong> (Drusus), meaning "strong foundation," the Drusus Foundation was
              established to create a sanctuary of agricultural stewardship and
              spiritual growth.
            </p>
            <p className="text-stone-600 leading-relaxed">
              We operate not as a commercial entity, but as a Private Membership
              Association (PMA)—a voluntary union of like-minded individuals
              dedicated to supporting one another through the provision of
              healthy farm products and mutual aid.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-[#4B5320]/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000"
                alt="Farm Detail"
                className="w-full aspect-4/5 object-cover"
              />
            </div>
          </div>
        </section>

        <section className="relative bg-stone-900 text-white p-16 md:p-24 rounded-[40px] shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover blur-sm"
              alt="bg"
            />
          </div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="text-[#A3AD73] text-xs font-bold uppercase tracking-[0.5em] mb-8 block">
              The Calling
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic tracking-tight">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed font-light text-stone-200 font-serif">
              "Stewardship of land, cultivation of community, and mutual support
              through private association."
            </p>
          </div>
        </section>

        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight">
              Core Pillars of Our Ministry
            </h2>
            <div className="flex justify-center mt-6">
              <div className="h-px w-24 bg-[#4B5320]/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Values-Based Community",
                desc: "Building relationships based on shared values of integrity, faith, and responsibility toward the land and each other.",
              },
              {
                title: "Educational Stewardship",
                desc: "Sharing traditional skills, from organic cultivation to heritage baking, through member-led consultations.",
              },
              {
                title: "Mutual Aid Network",
                desc: "Maintaining a reserve for members experiencing hardship, ensuring no one in our association goes without basic needs.",
              },
              {
                title: "Rural Sanctuary",
                desc: "Providing a quiet space on our Oregon farm for members to rest, pray, and reconnect with nature.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="group bg-white p-10 rounded-4xl shadow-sm border border-stone-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-[#4B5320]/20"
              >
                <h3 className="text-xl font-serif text-stone-800 mb-4 group-hover:text-[#4B5320] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
