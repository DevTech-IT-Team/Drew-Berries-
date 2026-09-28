import React, { useState, useEffect } from "react";
import { Leaf, Calendar, CheckCircle2, X, ArrowRight } from "lucide-react";

import Arugula from "../../public/offerings/arugula.png";
import Kale from "../../public/offerings/kale.png";
import Beets from "../../public/offerings/beet.png";
import Broccoli from "../../public/offerings/broccoli.png";
import Cress from "../../public/offerings/cress.png";
import Peas from "../../public/offerings/peas.png";
import Radish from "../../public/offerings/radish.png";
import Sunflower from "../../public/offerings/sunflower.png";

const HARVEST_ITEMS = [
  { id: 1, name: "Fresh Arugula", status: "Available", image: Arugula },
  { id: 2, name: "Organic Kale", status: "Available", image: Kale },
  { id: 3, name: "Root Beets", status: "Available", image: Beets },
  { id: 4, name: "Green Broccoli", status: "Available", image: Broccoli },
  { id: 5, name: "Spicy Cress", status: "Available", image: Cress },
  { id: 6, name: "Sweet Peas", status: "Available", image: Peas },
  { id: 7, name: "Crisp Radish", status: "Available", image: Radish },
  { id: 8, name: "Sunflowers", status: "Available", image: Sunflower },
];

const Harvest = () => {
  useEffect(() => {
    document.title = "This Week's Harvest - Fresh Farm Produce in Grants Pass, Oregon";
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduce, setSelectedProduce] = useState("");
  const [result, setResult] = useState("");

  const openModal = (produceName = "") => {
    setSelectedProduce(produceName);
    setIsModalOpen(true);
    setResult("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY?.toString().trim();
    
    if (!apiKey) {
      setResult("Error: API key not configured. Check .env file");
      return;
    }
    
    const formData = new FormData(event.target);
    formData.set("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Request Submitted Successfully!");
        event.target.reset();
        setTimeout(() => closeModal(), 3000);
      } else {
        setResult("Error: " + (data.message || "Failed"));
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-[#4B5320]/10 pb-32 relative">
      {/* Header */}
      <section className="relative pt-20 pb-24 px-6 border-b border-stone-100 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4B5320]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="text-[#4B5320]" size={20} />
            <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.5em]">
              Updated Weekly
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-stone-900 mb-6 tracking-tighter leading-none">
            This Week's <br className="md:hidden" />
            <span className="font-light text-[#4B5320] italic">Harvest.</span>
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-serif italic leading-relaxed">
            "Fresh, seasonal produce currently available for our members. 
            Grounded in soil, nourished by nature."
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {HARVEST_ITEMS.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-stone-50">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=500&auto=format&fit=crop"; }}
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[#4B5320]" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-700">{item.status}</span>
                </div>
              </div>
              <h3 className="text-xl font-serif text-stone-800 tracking-tight mb-2 group-hover:text-[#4B5320] transition-colors">{item.name}</h3>
              <p className="text-stone-400 text-xs font-sans uppercase tracking-widest font-bold flex items-center gap-1.5 mb-6">
                <Leaf size={12} /> Seasonal Crop
              </p>
              
              <button 
                onClick={() => openModal(item.name)}
                className="mt-auto w-full bg-stone-100 text-stone-600 py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-[10px] hover:bg-[#4B5320] hover:text-white transition-all shadow-sm active:scale-95 min-h-[48px]"
              >
                Request Item
              </button>
            </div>
          ))}
        </div>
        
        {/* Farm Stand Section */}
        <div className="mt-32 max-w-6xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-lg border border-stone-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4B5320]/5 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-[#4B5320]/10 flex items-center justify-center">
                <Leaf size={18} className="text-[#4B5320]" />
              </div>
              <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.4em]">Pick Up Location</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight relative z-10">The Front Gate <br/><span className="italic text-[#4B5320]">Farm Stand.</span></h2>
            <p className="text-stone-600 font-serif leading-relaxed mb-8 relative z-10 text-lg">
              Members and visitors can pick up their reserved produce directly at our front gate farm stand. It's a convenient stop designed to ensure your harvest is fresh and ready for you when you arrive.
            </p>
            <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-stone-200 text-sm font-serif text-stone-600 relative z-10">
              <strong className="text-stone-900 block mb-3 font-sans font-black uppercase tracking-[0.2em] text-[10px] border-b border-stone-200 pb-2">How Pickup Works</strong>
              <ul className="space-y-2">
                <li className="flex gap-3"><span className="text-[#4B5320] font-black">1.</span> Submit your produce request above.</li>
                <li className="flex gap-3"><span className="text-[#4B5320] font-black">2.</span> Receive confirmation of your order.</li>
                <li className="flex gap-3"><span className="text-[#4B5320] font-black">3.</span> Pick up your fresh harvest at the stand!</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2 bg-stone-100 relative min-h-[400px]">
            {/* Placeholder for A. Gray's picture */}
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
              alt="Farm Stand" 
              className="absolute inset-0 w-full h-full object-cover saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-stone-900/10"></div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-24 bg-[#4B5320] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]"></div>
          <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 relative z-10 tracking-tight">Ready to fill your basket?</h2>
          <p className="text-stone-300 font-serif italic text-lg md:text-xl mb-10 max-w-xl mx-auto relative z-10">
            Request your favorite produce for this week's harvest directly from our fields to your table.
          </p>
          <button 
            onClick={() => openModal()}
            className="inline-block bg-white text-[#4B5320] px-10 py-4 rounded-xl font-sans font-black uppercase tracking-[0.2em] text-xs hover:bg-stone-100 transition-colors shadow-lg relative z-10 active:scale-95"
          >
            Submit Produce Request
          </button>
        </div>
      </section>

      {/* Produce Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative bg-[#FDFBF7] rounded-[32px] w-full max-w-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="bg-white border-b border-stone-100 px-8 py-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-serif font-black text-stone-900 tracking-tight">Produce Request</h3>
                <p className="text-stone-500 text-sm font-serif italic mt-1">Reserve your share of this week's harvest.</p>
              </div>
              <button 
                onClick={closeModal}
                className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Form */}
            <div className="p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                <input type="hidden" name="subject" value="New Produce Request" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif placeholder:text-stone-300"
                      placeholder="e.g. Samuel Miller"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif placeholder:text-stone-300"
                      placeholder="samuel@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Produce Selection</label>
                    <select 
                      name="produce" 
                      required
                      defaultValue={selectedProduce}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif text-stone-700 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an item</option>
                      <option value="Mixed Box">Mixed Harvest Box</option>
                      {HARVEST_ITEMS.map(item => (
                        <option key={item.id} value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Quantity</label>
                    <input 
                      type="text" 
                      name="quantity"
                      required
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif placeholder:text-stone-300"
                      placeholder="e.g. 2 bunches, 1 box"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Additional Notes (Optional)</label>
                  <textarea 
                    name="notes"
                    rows="3"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif resize-none placeholder:text-stone-300"
                    placeholder="Any specific preferences or questions..."
                  />
                </div>

                {result && (
                  <div className={`text-center text-sm font-medium ${result.includes("Successfully") ? "text-[#4B5320]" : result.includes("Error") ? "text-red-600" : "text-stone-500"}`}>
                    {result}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-[#4B5320] text-white py-4 rounded-xl font-sans font-black uppercase tracking-widest text-[11px] shadow-lg shadow-[#4B5320]/20 hover:bg-stone-900 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  Send Request <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Harvest;
