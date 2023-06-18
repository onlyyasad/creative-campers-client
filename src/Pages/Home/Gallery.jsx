import Gradient from "rgt";
const Gallery = () => {
  return (
    <div className="container my-20 px-4 mx-auto">
      <div className="my-8">
        <h1
          data-aos="fade-right"
          className="uppercase mb-5 font-bold text-3xl text-center"
        >
          <Gradient dir="left-to-right" from="#06B6D4" to="#1D4ED8">
            {"Gallery"}
          </Gradient>
        </h1>
        <p data-aos="fade-up" className="text-center">
          See our last years summer camp moments & memories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div
          data-aos="fade-right"
          className="w-full h-52"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          data-aos="fade-up"
          className="w-full h-full md:row-span-2"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1613487700156-bbde37f69132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=416&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          data-aos="fade-right"
          className="w-full h-52 md:col-span-2"
          style={{
            backgroundImage: `url("https://plus.unsplash.com/premium_photo-1686836995623-f99aa9cb6767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          data-aos="fade-up"
          className="w-full h-52"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          data-aos="fade-right"
          className="w-full h-52"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          data-aos="fade-up"
          className="w-full h-52"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
