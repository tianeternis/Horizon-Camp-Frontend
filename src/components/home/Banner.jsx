import homeBackgroundImage from "@/assets/images/home-bg-img.webp";

const Banner = ({}) => {
  return (
    <div className="relative h-screen w-full">
      <img
        src={homeBackgroundImage}
        className="-z-10 h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Banner;
