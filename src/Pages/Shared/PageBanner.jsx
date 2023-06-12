

const PageBanner = ({bannerImg, bannerTitle, bannerTag}) => {
    return (
        <div className="bg-base-200 pt-16">
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="max-w-sm md:max-w-md lg:max-w-lg rounded-lg" />
                    <div>
                        <h1 className="text-5xl font-bold">{bannerTitle}</h1>
                        <p className="py-6">{bannerTag}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;