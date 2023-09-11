"use client";
import { motion } from "framer-motion";
const about_two_bg = {
  img_1: "/images/about-bg.png",
  img_3: "/images/about/video-2-shape-2.png",
  title: "Explore Thousands of Creative Classes.",
  des: (
    <>
      {" "}
      Our expertise includes web design and development, mobile app development,
      digital marketing strategy & management, performance marketing, branding,
      and graphic design.
    </>
  ),
};

const { img_1, img_3, title, des } = about_two_bg;

const AboutUs = () => {
  return (
    <>
      <section className="bg-[url('/images/about/about-bg.png')] bg-cover bg-center pt-2 sm:pt-20 pb-20">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-12 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" w-full pt-6 lg:w-1/2"
          >
            <span className="text-xl font-semibold tracking-wide text-[#fa9f1c]">
              About US
            </span>
            <h1 className="text-3xl font-semibold tracking-wide text-white dark:text-[#001d35] lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
            <p className="mt-4 text-white dark:text-[#001d35]">{des}</p>
            <a
              href="/about"
              className="!py-[18px] my-10 !px-[60px] text-[18px] btn-action style-2"
            >
              Read More
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <img src={img_1} alt="about-img" />

            <img
              src={img_3}
              alt="about-shape"
              className="absolute bottom-0 right-0 opacity-50"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
