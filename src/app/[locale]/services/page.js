import Div from "@/components/home/Div";
import Services1 from "./services/services1";
import Services2 from "./services/services2";
import InnerBanner from "@/components/innerBanner";

const Services = () => {
  const portfolioData = [
    {
      title: "Winery eCommerce website design & development",
      subtitle: "Digital Consultation",
      btnText: "View Projects",
      btnLink: "/Portfolio",
      imageUrl: "/images/portfolio_1.jpeg",
      category: "Web Development",
    },
    {
      title: "Euro corporate agency for healthy environment",
      subtitle: "Creative Assets ",
      btnText: "View Projects",
      btnLink: "/Portfolio",
      imageUrl: "/images/portfolio_2.jpeg",
      category: "Branding",
    },
    {
      title: "Powerful admin dashboard design",
      subtitle: "Digital Marketing",
      btnText: "View Projects",
      btnLink: "/Portfolio",
      imageUrl: "/images/portfolio_3.jpeg",
      category: "UI Design",
    },
    {
      title: "Crypto financial trading apps for hedge fund",
      subtitle: "Social Media Management",
      btnText: "View Projects",
      btnLink: "/Portfolio",
      imageUrl: "/images/portfolio_4.jpeg",
      category: "Apps Design",
    },
  ];

  return (
    <>
      <InnerBanner />
      {portfolioData.map((item, index) => (
        <Services1
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          btnText={item.btnText}
          btnLink={item.btnLink}
          imageUrl={item.imageUrl}
          category={item.category}
        />
      ))}
      {/* End Portfolio Section */}
      <div className="bg-[#01080f] h-[100px] dark:bg-white"></div>
    </>
  );
};

export default Services;
