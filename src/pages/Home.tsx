import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Plans from "../components/Plans";
import WhatsappButton from "../components/whatsappBotton";
import Transformations from "../components/Transformations";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Plans />
      <WhatsappButton />
      <Transformations />
      <Trainers />
      <Testimonials />
<Contact />
<Footer />
    </>
  );
};

export default Home;