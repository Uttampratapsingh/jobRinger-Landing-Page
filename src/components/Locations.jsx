const Locations = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Jobs in India */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">JOBS IN INDIA</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["#Mumbai", "#Delhi", "#Ajmer", "#Pune", "#Hyderabad", "#Agra", "#Chennai", "#Kolkata", "#Indore", "#Gurugram", "#Jaipur", "#Ahmedabad"].map((city) => (
                <button
                  key={city}
                  className="bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm"
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          
          {/* International Jobs */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">INTERNATIONAL JOBS</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["#Africa", "#USA", "#UK", "#Australia", "#Canada", "#Singapore", "#Dubai", "#Saudi Arabia", "#New Zealand"].map((country) => (
                <button
                  key={country}
                  className="bg-white hover:bg-teal-50 text-gray-700 hover:text-teal-600 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 shadow-sm"
                >
                  {country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
