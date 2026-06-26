import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";

import Loader from "./components/Loader/Loader";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Contact from "./components/Contact/Contact";
import Companies from "./components/Companies/Companies";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
    <Loader />
     <ProgressBar />
      <CursorGlow />
    <Background/>
      <Navbar />
      <main>
        <Hero />
      
        <Companies />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <FAQ />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;