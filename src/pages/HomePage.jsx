import homeBackgroundImage from "@/assets/images/home-bg-img.webp";

const HomePage = ({}) => {
  return (
    <div>
      <div className="relative h-screen w-full">
        <img
          src={homeBackgroundImage}
          className="-z-10 h-full w-full object-cover object-center"
        />
      </div>
      <div className="h-96">Home page</div>
    </div>
  );
};

export default HomePage;
