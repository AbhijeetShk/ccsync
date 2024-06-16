import { About } from "./LandingComponents/About/About";
import { FAQ } from "./LandingComponents/FAQ/FAQ";
import { Footer } from "./LandingComponents/Footer/Footer";
import { Hero } from "./LandingComponents/Hero/Hero";
import { HowItWorks } from "./LandingComponents/HowItWorks_LP";
import { Navbar } from "./LandingComponents/Navbar/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";
import { Contact } from "./LandingComponents/Contact_LP";
import "../App.css";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Contact />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}