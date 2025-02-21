import "@/assets/css/products.css";
import ProductDescription from "@/components/product/detail/ProductDescription";
import ProductInformation from "@/components/product/detail/ProductInformation";
import ProductReview from "@/components/product/detail/ProductReview";
import RecommendedProduct from "@/components/product/detail/RecommendedProduct";
import SimilarProduct from "@/components/product/detail/SimilarProduct";
import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

// const product = {
//   name: "Khăn tấm trải du lịch chụp ảnh picnic, trải bàn ăn bằng nhựa PVC chống thấm nước gấp gọn tiện dụng K147",
//   images: [
//     "https://bizweb.dktcdn.net/100/440/011/products/sp17.jpg?v=1634894825320",
//     "https://bizweb.dktcdn.net/100/440/011/products/sp17-2.jpg?v=1634894826087",
//     "https://bizweb.dktcdn.net/100/440/011/products/sp17-3.jpg?v=1634894826977",
//     "https://bizweb.dktcdn.net/100/440/011/products/sp17-3.png?v=1634894828543",
//     "https://bizweb.dktcdn.net/100/440/011/products/sp17-4.jpg?v=1634894829343",
//   ],
//   description:
//     "[Tên sản phẩm] là sự lựa chọn hoàn hảo dành cho những ai đang tìm kiếm một sản phẩm chất lượng cao, bền bỉ và đáp ứng mọi nhu cầu sử dụng. Với thiết kế tinh tế, hiện đại, sản phẩm không chỉ mang đến vẻ đẹp sang trọng mà còn góp phần nâng cao trải nghiệm của người dùng. Được sản xuất từ chất liệu cao cấp, [Tên sản phẩm] đảm bảo độ bền theo thời gian, giúp bạn yên tâm sử dụng mà không lo hư hỏng hay xuống cấp. Không chỉ dừng lại ở thiết kế đẹp mắt, [Tên sản phẩm] còn được trang bị công nghệ tiên tiến giúp tối ưu hiệu suất và tiết kiệm năng lượng. Các tính năng thông minh được tích hợp mang lại sự tiện lợi tối đa, giúp bạn dễ dàng sử dụng ngay cả khi không am hiểu nhiều về công nghệ. Bên cạnh đó, sản phẩm còn có khả năng hoạt động ổn định, đảm bảo hiệu quả trong thời gian dài mà không gây ảnh hưởng đến trải nghiệm của người dùng. Một trong những ưu điểm nổi bật của [Tên sản phẩm] chính là tính linh hoạt và đa dụng. Dù bạn sử dụng tại nhà, văn phòng hay mang theo khi di chuyển, sản phẩm vẫn đáp ứng một cách hoàn hảo. Thiết kế nhỏ gọn nhưng mạnh mẽ giúp tiết kiệm không gian mà vẫn đảm bảo đầy đủ các chức năng cần thiết. Đặc biệt, sản phẩm còn dễ dàng vệ sinh và bảo dưỡng, giúp bạn tiết kiệm thời gian và công sức trong quá trình sử dụng. [Tên sản phẩm] không chỉ đơn thuần là một sản phẩm mà còn là một người bạn đồng hành đáng tin cậy trong cuộc sống hàng ngày. Với sự kết hợp giữa chất lượng, công nghệ và thiết kế đẳng cấp, đây chắc chắn là lựa chọn lý tưởng dành cho bạn. Nếu bạn đang tìm kiếm một sản phẩm vừa đẹp mắt, vừa tiện lợi và bền bỉ, [Tên sản phẩm] chính là câu trả lời hoàn hảo!",
//   brand: {
//     name: "NatureHike",
//     image:
//       "https://dioutdoor.vn/media/2020/08/logo-brand-naturehike-65x33.png.webp",
//   },
//   totalSold: 20000000,
//   averageRating: 4.5,
//   totalReview: 1000,
//   price: 150000,
//   discount: 2,
//   discountedPrice: 100000,
//   colors: [
//     { _id: 1, hex: "#FF0000", label: "Đỏ", value: "Đỏ" },
//     { _id: 2, hex: "#00FF00", label: "Xanh Lá", value: "Xanh Lá" },
//     { _id: 3, hex: "#0000FF", label: "Xanh Dương", value: "Xanh Dương" },
//     { _id: 4, hex: "#FFFF00", label: "Vàng", value: "Vàng" },
//   ],
//   sizes: [
//     { _id: 1, label: "XS", value: "XS" },
//     { _id: 2, label: "S", value: "S" },
//     { _id: 3, label: "M", value: "M" },
//     { _id: 4, label: "L", value: "L" },
//   ],
//   category: [
//     { _id: 1, name: "Leo núi - Dã ngoại" },
//     { _id: 2, name: "Bàn & Ghế cấm trại" },
//   ],
//   additionalInformation: [
//     {
//       _id: 1,
//       name: "Model",
//       value: "CNK2300JJ018",
//     },
//     {
//       _id: 2,
//       name: "Chất liệu",
//       value: "Hợp kim nhôm, sợi polyester 100%, phụ kiện sắt",
//     },
//     {
//       _id: 3,
//       name: "Kích thước mở rộng",
//       value: "61x53x70 cm",
//     },
//     {
//       _id: 4,
//       name: "Kích thước gấp gọn",
//       value: "72x17x17 cm",
//     },
//     {
//       _id: 5,
//       name: "Khối lượng",
//       value: "Khoảng 2.4kg",
//     },
//     {
//       _id: 6,
//       name: "Trọng tải",
//       value: "Khoảng 110kg",
//     },
//   ],
// };

const ProductDetail = ({}) => {
  const product = useLoaderData();

  const { t } = useTranslation();

  useDynamicTitle(product?.name || "Horizon Camp");

  return (
    <BodyLayout>
      <div className="product-detail">
        {_.isEmpty(product) ? (
          <div className="rounded-md border border-solid border-orange-100 bg-orange-50 px-4 py-3 text-13px font-medium text-orange-500 sr-550:py-4 sr-550:text-sm">
            {t("products.detail.not_found")}
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="grow space-y-3">
              <ProductInformation product={product} />
              <ProductDescription product={product} />
              {/* <ProductReview product={product} /> */}
              {/* <SimilarProduct /> */}
              {/* <RecommendedProduct /> */}
            </div>
          </div>
        )}
      </div>
    </BodyLayout>
  );
};

export default ProductDetail;
