"use client";
import { motion } from "framer-motion";
const Counter = () => {
  return (
    <>
      {/* <!-- Counter --> */}
      <section className="tf-section counter -mt-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="flex items-center justify-between bg-[#001d35] rounded-[20px] p-[65px_105px_57px_97px] bg-no-repeat bg-center bg-cover
                                max-[767px]:!p-[65px_50px_57px_50px] dark:text-white"
                >
                  <div className="relative">
                    <h3 className="mb-[13px]">Create Your NFT Portfolio</h3>
                    <p className="text-[21px] mb-[7px]">
                      Get udpated with news, tips &amp; tricks
                    </p>
                  </div>
                  <a
                    href="/application"
                    className="!py-[18px] !px-[60px] text-[20px] btn-action style-2"
                  >
                    Join Now
                  </a>

                  {/* <div className="counter text-center max-[767px]:!mb-[60px]">
                    <div className="number-counter text-[48px] font-[Gilroy-Bold] mb-[6px] mt-[7px]">
                      <span
                        className="number"
                        data-speed="1000"
                        data-to="100"
                        data-inviewport="yes"
                      >
                        100
                      </span>
                      K
                    </div>
                    <h5>Registered User</h5>
                  </div>
                  <div className="counter text-center max-[767px]:!mb-[60px]">
                    <div className="number-counter text-[48px] font-[Gilroy-Bold] mb-[6px] mt-[7px]">
                      <span
                        className="number"
                        data-speed="1000"
                        data-to="5"
                        data-inviewport="yes"
                      >
                        5
                      </span>
                      M
                    </div>
                    <h5>Total Assets</h5>
                  </div>
                  <div className="counter text-center max-[767px]:!mb-[60px]">
                    <div className="number-counter text-[48px] font-[Gilroy-Bold] mb-[6px] mt-[7px]">
                      <span
                        className="number"
                        data-speed="1000"
                        data-to="10"
                        data-inviewport="yes"
                      >
                        10
                      </span>
                      B
                    </div>
                    <h5>Yearly Trading</h5>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Counter;
