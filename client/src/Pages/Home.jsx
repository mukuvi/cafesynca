import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-stretch">
      <Header />
      <p>Home</p>
      <Footer />
    </div>
  );
};
