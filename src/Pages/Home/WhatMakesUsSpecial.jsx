import iconBG from "../../assets/iconBG.svg"
import { motion } from "framer-motion"
import wmspecial from "../../assets/wmspecial.svg"

const WhatMakesUsSpecial = () => {

    return (
        <div className="py-20 flex justify-center items-center container mx-auto">
            <div>
                <div className="pb-10">
                    <h1 className="text-center text-3xl font-bold">What Makes Us Special</h1>
                    <p className="text-center">Unleash Your Creativity and Dive into the World of Digital Art!</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="space-y-4 flex flex-col justify-end items-end">
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-end text-lg font-semibold">Comprehensive Software Training</h1>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img className="h-20 rounded-full" src={iconBG} alt="" />
                            </ motion.div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-end text-lg font-semibold">Hands-on Learning Approach</h1>

                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img className="h-20 rounded-full" src={iconBG} alt="" />
                            </ motion.div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-end text-lg font-semibold">Customized Curriculum</h1>

                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img className="h-20 rounded-full" src={iconBG} alt="" />
                            </ motion.div>
                        </div>

                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-[80%]" src={wmspecial} alt="" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img className="h-20 rounded-full" src={iconBG} alt="" />
                            </ motion.div>
                            <div>
                                <h1 className=" text-lg font-semibold">Collaborative Environment</h1>

                            </div>

                        </div>
                        <div className="flex items-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img className="h-20 rounded-full" src={iconBG} alt="" />
                            </ motion.div>
                            <div>
                                <h1 className=" text-lg font-semibold">Inspiring Guest Speakers</h1>

                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <img className="h-20 rounded-full" src={iconBG} alt="" />
                            </ motion.div>
                            <div>
                                <h1 className=" text-lg font-semibold">Fun and Exciting Activities</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default WhatMakesUsSpecial;