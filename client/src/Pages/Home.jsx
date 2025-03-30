import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/hero";
import { Shop } from "../components/Shop";
import { Subscribe } from "../components/Subscribe";
import { About } from "../components/About";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-stretch">
      <Header />
      <Hero />
      <Shop />
      <About />
      <Subscribe />
      <Footer />
    </div>
  );
};
