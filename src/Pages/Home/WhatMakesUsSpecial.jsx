import iconBG from "../../assets/iconBG.svg"

const WhatMakesUsSpecial = () => {
    return (
        <div className="my-20">
            <div>
                <h1 className="text-center text-3xl font-bold">What Makes Us Special</h1>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, explicabo hic beatae magnam ut eius harum nobis atque incidunt sit totam, sapiente delectus amet nam veritatis esse in nihil quidem.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-end text-lg font-semibold">Lorem Ipsum</h1>
                            <p className="text-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-end text-lg font-semibold">Lorem Ipsum</h1>
                            <p className="text-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-end text-lg font-semibold">Lorem Ipsum</h1>
                            <p className="text-end">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                            <h1 className=" text-lg font-semibold">Lorem Ipsum</h1>
                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                        <div>
                            <h1 className=" text-lg font-semibold">Lorem Ipsum</h1>
                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-4">
                        <img className="h-20 rounded-full" src={iconBG} alt="" />
                        <div>
                            <h1 className=" text-lg font-semibold">Lorem Ipsum</h1>
                            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatMakesUsSpecial;