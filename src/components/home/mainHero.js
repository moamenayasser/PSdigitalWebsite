"use client";
import { motion } from "framer-motion";
const MainHero = () => {
  return (
    <>
      <section>
        {/* <!-- Jumbotron --> */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-center bg-[url('https://images.pexels.com/photos/1398829/pexels-photo-1398829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[100vh]">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.5)] bg-fixed">
            <div className="flex h-full items-center justify-start">
              <div className="px-6 text-left text-white md:px-[10rem]">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-8xl"
                >
                  The best offer on the market
                  <span>for your business</span>
                </motion.h1>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  href="/Portfolio"
                  className="btn-action style-2"
                >
                  View Projects
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
};

export default MainHero;
