import React from "react";
import { Link } from "react-router"; // Updated to react-router-dom for consistency

function Footer() {
  // Logic to handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#4b5320] text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*logo*/}
        <img
          src="/logo.png"
          alt="logo"
          className="w-16 h-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Mission */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif text-white mb-6 italic">
              Drew’s Berries & More
            </h3>
            <p className="text-white max-w-md leading-relaxed">
              Stewardship of land, cultivation of community, and mutual support
              through private association."
            </p>
            <p className="mt-4 text-xs text-white">
              Operated by the Drusus Foundation, a Private Membership
              Association and Agricultural Ministry located in Grants Pass, Southern Oregon.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/membership"
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  Membership
                </Link>
              </li> */}
              <li>
                <Link
                  to="/harvest"
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  This Week's Harvest
                </Link>
              </li>
              <li>
                <Link
                  to="/wholesale"
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  Wholesale
                </Link>
              </li>
              <li>
                <Link
                  to="/cabins"
                  onClick={handleScrollToTop}
                  className="hover:text-white transition-colors"
                >
                  Cabins
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              PMA Declaration
            </h4>
            <div className="text-sm text-white leading-relaxed italic space-y-3">
              <p>
                This is a private association. Our activities are restricted to
                members and constitute voluntary exchanges within a private
                ministry context.
              </p>
              <p>We do not operate as a public commercial entity.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p>
            © {new Date().getFullYear()} Drusus Foundation. All rights reserved
            internally.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Private Policy</span>
            <span>Association Bylaws</span>
            <span>Terms of Participation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;