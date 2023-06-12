import iconBG from "../../assets/iconBG.svg"

const WhatMakesUsSpecial = () => {
    return (
        <div className="my-20">
            <div>
                <h1 className="text-center text-3xl font-bold">What Makes Us Special</h1>
                <p className="text-center">Unleash Your Creativity and Dive into the World of Digital Art!</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-end text-lg font-semibold">Comprehensive Software Training</h1>
                            <p className="text-end text-sm">Master industry-standard tools like Photoshop, Illustrator, InDesign, XD, Canva, and more, under the guidance of experienced instructors.</p>
                        </div>
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-end text-lg font-semibold">Hands-on Learning Approach</h1>
                            <p className="text-end text-sm">Engage in practical exercises and real-life projects to apply your skills and develop a solid foundation in digital art and design.</p>
                        </div>
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-end text-lg font-semibold">Customized Curriculum</h1>
                            <p className="text-end text-sm">Tailored courses designed to suit all skill levels, from beginners to advanced learners, ensuring personalized learning experiences for every camper.</p>
                        </div>
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                    </div>

                </div>
                <div className="h-72 w-72 bg-base-200">
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                        <div>
                            <h1 className=" text-lg font-semibold">Collaborative Environment</h1>
                            <p className=" text-sm">Foster creativity and teamwork through interactive group projects, where campers can exchange ideas and learn from each other's perspectives.</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                        <div>
                            <h1 className=" text-lg font-semibold">Inspiring Guest Speakers</h1>
                            <p className=" text-sm">Benefit from inspiring talks and workshops by industry professionals, gaining insights and exposure to the latest trends and techniques in digital art.</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                        <div>
                            <h1 className=" text-lg font-semibold">Fun and Exciting Activities</h1>
                            <p className=" text-sm">Beyond the digital realm, enjoy a range of recreational activities, team-building exercises, and outdoor adventures, creating unforgettable summer camp memories.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatMakesUsSpecial;