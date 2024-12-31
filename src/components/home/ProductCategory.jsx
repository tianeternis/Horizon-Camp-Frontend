import { Link } from "react-router-dom";

const ProductCategory = ({}) => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-screen-xl px-3 py-16">
        <h4 className="relative mb-14 text-center text-xl font-bold uppercase text-secondary before:absolute before:-bottom-5 before:left-1/2 before:h-0.5 before:w-28 before:-translate-x-1/2 before:bg-secondary md:mb-20 md:text-3xl md:before:w-40">
          Danh mục sản phẩm
        </h4>
        <div className="grid grid-cols-2 gap-4 sr-500:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((i) => (
            <div
              key={i}
              className="rounded-lg p-4"
              style={{
                backgroundImage:
                  "radial-gradient(circle, transparent 20%, #fffce5, #ffeccc)",
              }}
            >
              <Link className="group flex flex-col items-center justify-center gap-3">
                <div className="w-16 sm:w-20 md:w-28">
                  <img
                    src="/src/assets/images/tent.png"
                    loading="lazy"
                    className="w-full duration-300 group-hover:scale-125"
                  />
                </div>
                <div className="text-center text-13px font-medium group-hover:text-secondary sm:text-sm md:text-15px">
                  Leo núi - Dã ngoại
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
