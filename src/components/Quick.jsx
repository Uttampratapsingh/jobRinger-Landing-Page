const Quick = () => {
  const tags = [
    "#Fresher", "#Work From Home", "#WFH", "#IT", "#HR", "#Back Office",
    "#BPO Jobs", "#ITES", "#Finance", "#Accounts", "#Medical", "#Pharma",
    "#Manager", "#Developer", "#Marketing", "#Engineering", "#Non Government Jobs"
  ];

  return (
    <section className="bg-gradient-to-bl from-sky-200 via-blue-700 to-sky-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            Quick Job Search 🔍
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quick;