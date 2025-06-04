import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaClock, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const FeaturedJobs = () => {
  const jobs = [
    { title: "Corporate Partnerships Senior Manager", company: "Arthan", type: "Full Time - Permanent", experience: "5 - 12 Years", location: "Bengaluru / Bangalore / India", badge: "In Office job" },
    { title: "Senior Content Writer", company: "TOPS Infosolutions Pvt. Ltd.", type: "Full Time - Permanent", experience: "2 - 5 Years", location: "Ahmedabad / India", badge: "In Office job" },
    { title: "Company Secretary & Legal Counsel", company: "GREX", type: "Full Time - Permanent", experience: "2 - 5 Years", location: "Mumbai / India", badge: "In Office job" },
    { title: "Medical Oncologist", company: "Naruvi Hospitals", type: "Full Time - Permanent", experience: "0 - 5 Years", location: "Vellore / India", badge: "In Office job" },
    { title: "Software Engineer", company: "Tech Solutions", type: "Full Time - Permanent", experience: "3 - 8 Years", location: "Pune / India", badge: "Remote job" },
    { title: "Marketing Manager", company: "Growth Corp", type: "Full Time - Permanent", experience: "4 - 10 Years", location: "Delhi / India", badge: "Hybrid job" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of cards to show based on screen size
  // Hardcoding for simplicity; in real-world, use window.innerWidth or a library like `react-responsive`
  const numCardsToShow = 3; // e.g., desktop 3, tablet 2, mobile 1

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? jobs.length - numCardsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + numCardsToShow >= jobs.length ? 0 : prev + 1
    );
  };

  // Slice jobs to show current window
  const visibleJobs = jobs.slice(currentIndex, currentIndex + numCardsToShow);
  // Wrap around for seamless effect
  while (visibleJobs.length < numCardsToShow) {
    visibleJobs.push(jobs[visibleJobs.length % jobs.length]);
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Jobs
        </h2>

        <div className="relative">
          <div className="flex -ml-2 md:-ml-4">
            {visibleJobs.map((job, index) => (
              <div
                key={index}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 flex-shrink-0"
              >
                <div className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <span className="bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {job.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-blue-600 mb-2 line-clamp-2">
                      {job.title}
                    </h3>

                    <div className="space-y-2 text-sm text-gray-600 mb-4 flex-grow">
                      <div className="font-semibold text-gray-900">{job.company}</div>

                      <div className="flex items-center gap-1">
                        <FaClock className="h-4 w-4" />
                        {job.type}
                      </div>

                      <div className="flex items-center gap-1">
                        <FaBriefcase className="h-4 w-4" />
                        {job.experience}
                      </div>

                      <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>

                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded mt-auto">
                      Apply ▶
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <FaLongArrowAltLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-300 hover:bg-gray-400"
            >
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
