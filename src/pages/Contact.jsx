import React, { useState, useEffect } from "react";
import { Mail, MapPin, ArrowRight, ShieldCheck, Leaf, Globe, Phone, Map } from "lucide-react";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Drew's Berries Farm";
  }, []);

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY?.toString().trim();
    console.log("API Key:", apiKey);

    if (!apiKey) {
      setResult("Error: API key not configured. Check .env file");
      console.error("VITE_WEB3FORMS_KEY is not defined in environment");
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
      console.log("Response:", data);

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error: " + (data.message || "Failed"));
      }
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div className="bg-[#fdfcf9] min-h-screen font-sans text-stone-800 selection:bg-[#4B5320]/10">

      {/* 1. Hero Header */}
      <section className="relative pt-10 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4B5320]" />
                ))}
              </div>
              <div className="w-16 h-px bg-[#4B5320]/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4B5320]">
                Private Correspondence
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif font-black text-stone-900 tracking-tighter mb-8">
              Get in <span className="font-light text-[#4B5320]">Touch.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(75,83,32,0.12)] border border-stone-100">

          {/* Left Panel: Information Sidebar */}
          <div className="lg:col-span-5 bg-stone-800 p-12 md:p-16 text-white relative overflow-hidden">
            <Leaf className="absolute -bottom-10 -left-10 w-64 h-64 text-[#4B5320]/10 -rotate-12" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif mb-6 leading-tight">
                  Membership <br />& Association Inquiries
                </h2>
                <p className="text-stone-400 leading-relaxed mb-12 font-serif italic text-lg">
                  "Our gates are private, but our hearts are open to those who share the vision of stewardship."
                </p>

                <div className="space-y-8">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-2 flex items-center gap-2"><Mail size={12} className="text-[#4B5320]" /> Electronic Mail</p>
                    <p className="text-lg font-medium border-b border-white/10 pb-2 group-hover:border-[#4B5320] transition-colors duration-500">
                      Drew@drewsberriesmore.com
                    </p>
                  </div>

                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-2 flex items-center gap-2"><Phone size={12} className="text-[#4B5320]" /> Phone</p>
                    <p className="text-lg font-medium border-b border-white/10 pb-2 group-hover:border-[#4B5320] transition-colors duration-500">
                      (555) 123-4567
                    </p>
                  </div>

                  <div className="group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-2 flex items-center gap-2"><MapPin size={12} className="text-[#4B5320]" /> The Land Location</p>
                    <p className="text-lg font-medium border-b border-white/10 pb-2">Grants Pass, Southern Oregon</p>
                  </div>

                  <div className="group bg-white/5 p-5 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white font-bold mb-2 flex items-center gap-2"><Map size={12} className="text-[#4B5320]" /> Directions</p>
                    <p className="text-sm font-serif italic text-stone-300 leading-relaxed">
                      Detailed directions will be provided upon confirmation of your visit or membership application. Our farm is situated privately within Grants Pass to maintain the sanctuary of our grounds.
                    </p>
                    <div className="flex items-center gap-2 text-white/50 text-xs mt-4 uppercase tracking-widest font-bold">
                      <ShieldCheck size={14} className="text-[#4B5320]" />
                      Members Only Access
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#4B5320]/30 flex items-center justify-center text-[#4B5320]">
                  <Globe size={18} />
                </div>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Global Stewardship PMA</span>
              </div> */}
            </div>
          </div>

          {/* Right Panel: The Stationery Form */}
          <div className="lg:col-span-7 p-12 md:p-20 bg-[#FDFBF7]">
            <form className="space-y-10" onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group relative">
                  <label className="text-[12px] font-black uppercase tracking-[0.2em] text-stone-400 group-focus-within:text-[#4B5320] transition-colors">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#4B5320] transition-all font-serif text-lg placeholder:text-stone-300"
                    placeholder="E.g. Samuel"
                  />
                </div>
                <div className="group relative">
                  <label className="text-[12px] font-black uppercase tracking-[0.2em] text-stone-400 group-focus-within:text-[#4B5320] transition-colors">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#4B5320] transition-all font-serif text-lg placeholder:text-stone-300"
                    placeholder="E.g. Miller"
                  />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[12px] font-black uppercase tracking-[0.2em] text-stone-400 group-focus-within:text-[#4B5320] transition-colors">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-stone-200 py-3 outline-none focus:border-[#4B5320] transition-all font-serif text-lg placeholder:text-stone-300"
                  placeholder="samuel@example.com"
                />
              </div>

              <div className="group relative">
                <label className="text-[12px] font-black uppercase tracking-[0.2em] text-stone-400 group-focus-within:text-[#4B5320] transition-colors">Reason for Connection</label>
                <select name="reason" className="w-full bg-transparent border-b border-stone-200 py-4 outline-none focus:border-[#4B5320] transition-all font-serif text-lg appearance-none cursor-pointer text-stone-600">
                  <option>Membership Application</option>
                  <option>Resource Exchange</option>
                  <option>Cabin Residency</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="group relative">
                <label className="text-[12px] font-black uppercase tracking-[0.2em] text-stone-400 group-focus-within:text-[#4B5320] transition-colors">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-stone-50/50 rounded-2xl p-6 mt-4 outline-none border border-stone-100 focus:border-[#4B5320]/30 focus:bg-white transition-all font-serif text-lg resize-none placeholder:text-stone-300"
                  placeholder="Tell us about your journey..."
                />
              </div>

              {result && (
                <div className={`text-center text-sm font-medium ${result === "Form Submitted Successfully" ? "text-green-600" : result === "Error" ? "text-red-600" : "text-stone-500"}`}>
                  {result}
                </div>
              )}

              <button type="submit" className="relative w-full group overflow-hidden bg-[#4B5320] py-6 rounded-2xl shadow-xl shadow-[#4B5320]/20 transition-all hover:shadow-[#4B5320]/40 active:scale-[0.98]">
                <div className="absolute inset-0 w-0 bg-black/20 transition-all duration-500 group-hover:w-full" />
                <span className="relative z-10 flex items-center justify-center gap-3 text-white text-[11px] font-black uppercase tracking-[0.4em]">
                  Dispatch Inquiry <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. Bottom Trust Bar */}
      <section className="border-t border-stone-100 py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#4B5320]" size={18} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">Secure 256-bit Correspondence</span>
          </div>
          <div className="flex gap-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#4B5320] cursor-pointer transition-colors">Privacy Bylaws</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-[#4B5320] cursor-pointer transition-colors">Association Terms</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;