const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sky-200 via-blue-700 to-sky-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">BRINGING YOU THE PERFECT JOB !</h1>
                <p className="text-xl text-white">11,000+ JOBS to Apply</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg p-6 shadow-xl">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <input type="text" placeholder="Search Jobs now" className="h-12 w-full rounded-lg border-2 pl-2 text-lg border-gray-300" />
                        </div>
                        <button className="h-12 px-8 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Search</button>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                        <button className="h-12 px-8 rounded-lg border hover:bg-gray-200 text-black font-semibold">View Jobs</button>
                        <button className="h-12 px-8 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Register For Free</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
