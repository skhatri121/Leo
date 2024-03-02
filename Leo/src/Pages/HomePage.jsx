import AboutLeo from "../Components/AboutLeo";
import Footer from "../Components/Footer";
import GallerySection from "../Components/GallerySection";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import LeoSection from "../Components/LeoSection";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <LeoSection />
      <AboutLeo />
      <Testimonials />
      <GallerySection />
      <Footer />
    </>
  );
};

export default HomePage;
