import React from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaGoogle,
  FaFacebook,
  FaAmazon,
  FaMicrosoft,
  FaApple,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const FeaturedEmployers = () => {
  const employers = [
    { name: "Google", logo: <FaGoogle className="text-red-500 text-4xl" /> },
    { name: "Facebook", logo: <FaFacebook className="text-blue-600 text-4xl" /> },
    { name: "Amazon", logo: <FaAmazon className="text-yellow-500 text-4xl" /> },
    { name: "Microsoft", logo: <FaMicrosoft className="text-green-500 text-4xl" /> },
    { name: "Apple", logo: <FaApple className="text-gray-800 text-4xl" /> },
    { name: "LinkedIn", logo: <FaLinkedin className="text-blue-700 text-4xl" /> },
    { name: "Twitter", logo: <FaTwitter className="text-blue-400 text-4xl" /> },
    { name: "GitHub", logo: <FaGithub className="text-black text-4xl" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          FEATURED <span className="text-blue-600">EMPLOYERS</span>
        </h2>

        <div className="relative">
          <div className="flex flex-wrap -ml-2 md:-ml-4">
            {employers.map((employer, index) => (
              <div
                key={index}
                className="
                  pl-2 md:pl-4
                  basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6
                  flex-shrink-0
                "
              >
                <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-center hover:shadow-md transition-shadow duration-300 cursor-pointer group h-28">
                  <div className="text-center">
                    <div className="mb-1 group-hover:scale-110 transition-transform duration-200">
                      {employer.logo}
                    </div>
                    <div className="text-xs text-gray-600">{employer.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows — hidden on small screens */}
          <div className="hidden lg:flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
            <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
              <FaLongArrowAltLeft />
            </button>
            <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400">
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEmployers;
