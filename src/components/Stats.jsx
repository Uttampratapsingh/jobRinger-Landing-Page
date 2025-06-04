const Stats = () => {
  const stats = [
    { label: "Jobs Posted", value: "41376", color: "text-blue-600" },
    { label: "Jobs Filled", value: "15153", color: "text-blue-600" },
    { label: "Employers", value: "25785", color: "text-blue-600" },
    { label: "Active Users", value: "1608908", color: "text-blue-600" }
  ];

  return (
    <section className="py-16 bg-gray-100 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className={`text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
