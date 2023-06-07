import PageBanner from "../Shared/PageBanner";


const Instructors = () => {
    return (
        <div className="my-8">
            <PageBanner></PageBanner>
            <div>
                <h1 className="uppercase font-bold text-3xl my-8 text-center">Our Instructors</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                    {/* Card 1 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://xsgames.co/randomusers/assets/avatars/male/48.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;