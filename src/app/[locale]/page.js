import AboutUs from "@/components/home/about2";
import Clients from "@/components/home/clients";
import Counter from "@/components/home/counter";
import MainHero from "@/components/home/mainHero";
import WorkSlider from "@/components/home/ourWork";
import PotfolioSlider from "@/components/home/potfolioSlider";
import ServiceList from "@/components/home/servicesList";
import TeamSlider from "@/components/home/teamSlider";
import "slick-carousel/slick/slick.css";

const HomePage = () => {
  return (
    <>
      <MainHero />
      <Counter />
      <AboutUs />
      <Clients />
      <PotfolioSlider />
      <ServiceList />
      <WorkSlider />
      <TeamSlider />
      <Counter />
    </>
  );
};

export default HomePage;
