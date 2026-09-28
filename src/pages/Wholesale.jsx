import React, { useState, useEffect } from "react";
import { Store, ChefHat, ArrowRight, Truck } from "lucide-react";

const Wholesale = () => {
  useEffect(() => {
    document.title = "Wholesale & Restaurant Produce - Grants Pass, Oregon";
  }, []);

  const [result, setResult] = useState("");

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
        setResult("Inquiry Submitted Successfully!");
        event.target.reset();
      } else {
        setResult("Error: " + (data.message || "Failed"));
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans selection:bg-[#4B5320]/10 pb-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 border-b border-stone-100 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=2000" 
            alt="Wholesale Produce" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#FDFBF7]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <ChefHat className="text-[#4B5320]" size={24} />
            <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.5em]">
              Culinary Partners
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-stone-900 mb-6 tracking-tighter leading-none">
            Restaurant & <br className="md:hidden" />
            <span className="font-light text-[#4B5320] italic">Wholesale.</span>
          </h1>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-serif italic leading-relaxed">
            "Elevate your menu with our freshly harvested, seasonal produce. Grown with care in Grants Pass, Southern Oregon."
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <div className="inline-block bg-[#4B5320] text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 w-max">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">
              Farm-to-Table <br/>
              <span className="italic text-stone-500">Partnerships</span>
            </h2>
            <p className="text-stone-600 font-serif leading-relaxed mb-8 text-lg">
              We are currently developing our exclusive wholesale and restaurant portal. Soon, culinary professionals will have direct access to our weekly harvest inventory, bulk purchasing options, and reliable delivery scheduling.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#4B5320]/10 flex items-center justify-center shrink-0">
                  <Store className="text-[#4B5320]" size={20} />
                </div>
                <div>
                  <h3 className="text-stone-900 font-bold mb-1">Bulk Availability</h3>
                  <p className="text-stone-500 text-sm font-serif">Access to large quantities of our seasonal crops tailored for high-volume needs.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#4B5320]/10 flex items-center justify-center shrink-0">
                  <Truck className="text-[#4B5320]" size={20} />
                </div>
                <div>
                  <h3 className="text-stone-900 font-bold mb-1">Streamlined Logistics</h3>
                  <p className="text-stone-500 text-sm font-serif">Dedicated support for order coordination and farm stand pickups.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-xl border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4B5320]/5 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-black text-stone-900 mb-2">Join the Waitlist</h3>
              <p className="text-stone-500 text-sm font-serif italic mb-8">Submit your details to be notified when our wholesale program launches.</p>
              
              <form onSubmit={onSubmit} className="space-y-6">
                <input type="hidden" name="subject" value="New Wholesale/Restaurant Inquiry" />
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Business Name</label>
                  <input 
                    type="text" 
                    name="business_name"
                    required
                    className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif placeholder:text-stone-300"
                    placeholder="e.g. The Creekside Cafe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Contact Person</label>
                  <input 
                    type="text" 
                    name="contact_name"
                    required
                    className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif placeholder:text-stone-300"
                    placeholder="e.g. Samuel Miller"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif placeholder:text-stone-300"
                    placeholder="samuel@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-500">Produce Interests (Optional)</label>
                  <textarea 
                    name="interests"
                    rows="3"
                    className="w-full bg-[#FDFBF7] border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#4B5320] transition-colors font-serif resize-none placeholder:text-stone-300"
                    placeholder="What crops are you most interested in sourcing?"
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
                  Submit Inquiry <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Wholesale;
