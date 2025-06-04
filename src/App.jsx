import FeaturedEmployers from "./components/FeaturedEmployers";
import FeaturedJobs from "./components/FeaturedJobs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Quick from "./components/Quick";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <Hero/>
      <Quick/>
      <FeaturedJobs/>
      <FeaturedEmployers/>
      <Locations/>
      <Stats/>
      <Footer/>
    </div>
  )
}

export default App
