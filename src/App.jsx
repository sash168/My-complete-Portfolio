import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import FeatureCards from "./sections/featureCards"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <Experience />
      <TechStack />
      {/* <Testimonials /> */}
      <Contact/>
    </>
  )
}

export default App