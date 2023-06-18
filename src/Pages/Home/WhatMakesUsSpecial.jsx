import { motion } from "framer-motion";
import { BsCheck2Circle } from "react-icons/bs";
import Gradient from "rgt";
import wmspecial from "../../assets/wmspecial.svg";

const WhatMakesUsSpecial = () => {
  return (
    <div className="bg-yellow-400">
      <div className="py-20 px-4 flex justify-center items-center container mx-auto">
        <div>
          <div className="pb-10">
            <h1
              data-aos="fade-right"
              className="text-center mb-5 text-3xl font-bold"
            >
              <Gradient dir="left-to-right" from="#06B6D4" to="#1D4ED8">
                {"What Makes Us Special"}
              </Gradient>
            </h1>
            <p data-aos="fade-right" className="text-black text-center">
              Unleash Your Creativity and Dive into the World of Digital Art!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="space-y-4 flex flex-col justify-center items-end">
              <div data-aos="fade-right" className="flex items-center gap-4">
                <div>
                  <h1 className="text-end text-black text-lg font-semibold">
                    Comprehensive Training
                  </h1>
                </div>
                <BsCheck2Circle className="text-3xl text-black" />
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <div>
                  <h1 className="text-end text-black text-lg font-semibold">
                    Hands-on Learning Approach
                  </h1>
                </div>
                <BsCheck2Circle className="text-3xl text-black" />
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <div>
                  <h1 className="text-end text-black text-lg font-semibold">
                    Customized Curriculum
                  </h1>
                </div>
                <BsCheck2Circle className="text-3xl text-black" />
              </div>
            </div>
            <div data-aos="fade-up">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex justify-center items-center"
              >
                <img className="w-[80%]" src={wmspecial} alt="" />
              </motion.div>
            </div>
            <div className="space-y-4 flex flex-col justify-center items-start">
              <div data-aos="fade-right" className="flex items-center gap-4">
                <BsCheck2Circle className="text-3xl text-black" />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Collaborative Environment
                  </h1>
                </div>
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <BsCheck2Circle className="text-3xl text-black" />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Inspiring Guest Speakers
                  </h1>
                </div>
              </div>
              <div data-aos="fade-right" className="flex items-center gap-4">
                <BsCheck2Circle className="text-3xl text-black" />
                <div>
                  <h1 className="text-black text-lg font-semibold">
                    Fun and Exciting Activities
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsSpecial;
