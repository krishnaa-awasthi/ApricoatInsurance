import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Home = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className='w-full h-screen bg-[url("https://media-hosting.imagekit.io/a485e808753447aa/apricoat%20home%20page%20image(1).png?Expires=1841826389&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bzacflDWi5yn8zndA2UcHnBKSLBvZAsgDeSU8zYq378ko0Cw3ZheMopZ9N2F55hr17dZUYUldOLM-wI82FSC~50lMRFgXxxgym7eemy7u2at75TJ5rvpy0leOjtkL1coZYGCwEHqMZGB~6RSHDHNlAmFIOjfyi~-M8tSkm3jo3~oge5y9eXcBjsgo0TJge0mqwLM~IIhDVsxUSxPfOqoxQJ5WKPAltV7SWtYtqo29~zFzdt4lHh1Dc76uG8EdGIitr9urwl693u9x-A7IUwBhfyhwmG66TmHbV6x9KiaVzDwXFsia09uFqCbq6ckIkYR3zew90ixdHdnW9KMK4NEaw__")] bg-cover bg-center'
    >
      <div className="w-full h-full flex flex-col justify-center p-6 sm:p-10 md:p-20 ">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text- pb-4 mt-10 sm:pb-5">
          <TypeAnimation
            sequence={["Apricoat Insurance Marketing Pvt. Ltd.",3000, "", 2000]}
            speed={50}
            wrapper="span"  
            repeat={Infinity}
          />
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-greenMatch pb-4 sm:pb-5">
          Protect what matters
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-semibold text pb-6 max-w-xl">
          Specialized insurance solutions for marine, fire, and more. Get peace
          of mind with Apricoat's comprehensive coverage options.
        </p>

        {/* Buttons container */}
        <div className="flex flex-wrap gap-4">
          <Link to="/apricoat-insurance/quotes">
            <button className="w-40 h-12 bg-orange-300 text-white font-bold text-lg rounded-md hover:bg-orange-400 transition duration-300 ease-in-out">
              Get Quotes
            </button>
          </Link>

          <a
            href="/apricoatinsurance/Apricoat_Insurance.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-52 h-12 bg-orange-300 text-white font-bold text-lg rounded-md hover:bg-orange-400 transition duration-300 ease-in-out flex items-center justify-center gap-2"
          >
            <FaDownload className="text-white" />
            View Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
