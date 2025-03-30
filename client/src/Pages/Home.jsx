import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/hero";
import { Shop } from "../components/Shop";
import { Subscribe } from "../components/Subscribe";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-stretch">
      <Header />
      <Hero />
      <Shop />
      <Subscribe />
      <Footer />
    </div>
  );
};
