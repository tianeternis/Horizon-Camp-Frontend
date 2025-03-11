import logo from "@/assets/images/logo.webp";
import { formatAddress } from "@/utils/format/address";
import { formatCurrency } from "@/utils/format/currency";
import { formatDateToHHMMDDMMYYYY } from "@/utils/format/date";

const Invoice = ({ order }) => {
  const handleDownloadInvoice = async () => {};

  return (
    <div>
      <button
        className="bg-red-500 px-6 py-2 text-sm text-white"
        onClick={handleDownloadInvoice}
      >
        Tải hóa đơn
      </button>

      <div className="w-full px-10 py-16">
        <div className="mx-auto w-[600px] space-y-10">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={logo} className="w-20" />
            <div className="text-lg font-semibold uppercase tracking-widest">
              Horizon Camp
            </div>
          </div>
          <div className="text-center text-base font-semibold uppercase">
            Hóa đơn
          </div>
          <div className="space-y-6">
            <div className="flex justify-between text-13px">
              <div>Mã đơn: #{order?._id}</div>
              <div>
                Ngày đặt hàng: {formatDateToHHMMDDMMYYYY(order?.orderDate)}
              </div>
            </div>
            <div className="space-y-3 text-13px">
              <div className="flex justify-between">
                <div>
                  <span className="font-medium">Khách hàng: </span>
                  <span>{order?.address?.fullName}</span>
                </div>
                <div>
                  <span className="font-medium">Số điện thoại: </span>
                  <span>{order?.address?.phone}</span>
                </div>
              </div>
              <div>
                <span className="font-medium">Địa chỉ: </span>
                <span>
                  {order?.address &&
                    formatAddress({
                      province: order?.address?.provinceName,
                      district: order?.address?.districtName,
                      ward: order?.address?.wardName,
                      details: order?.address?.detailAddress,
                    })}
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <table className="w-full border-collapse text-13px">
                <thead>
                  <tr className="font-semibold">
                    <th className="border border-solid border-gray-200 px-4 py-2">
                      #
                    </th>
                    <th className="border border-solid border-gray-200 px-4 py-2">
                      Sản phẩm
                    </th>
                    <th className="border border-solid border-gray-200 px-4 py-2">
                      Đơn giá
                    </th>
                    <th className="border border-solid border-gray-200 px-4 py-2">
                      Số lượng
                    </th>
                    <th className="border border-solid border-gray-200 px-4 py-2">
                      Thành tiền
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order?.orderDetails?.map((item, index) => (
                    <tr key={item?._id} className="text-center">
                      <td className="border border-solid border-gray-200 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-solid border-gray-200 px-4 py-2 text-left">
                        <p>{item?.name}</p>
                        {(() => {
                          let variant = [];
                          if (item?.color) variant.push(item?.color);
                          if (item?.size) variant.push(item?.size);

                          return variant.length > 0 ? (
                            <p className="pt-1.5 text-xs">
                              Phân loại: {variant.join(", ")}
                            </p>
                          ) : null;
                        })()}
                      </td>
                      <td className="border border-solid border-gray-200 px-4 py-2">
                        {formatCurrency(item?.discountedPrice)}
                      </td>
                      <td className="border border-solid border-gray-200 px-4 py-2">
                        {item?.quantity}
                      </td>
                      <td className="border border-solid border-gray-200 px-4 py-2 font-medium">
                        {formatCurrency(
                          +item?.discountedPrice * +item?.quantity,
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="grid grid-cols-2 gap-4 text-13px">
                <div className="col-span-1 text-left">
                  Phương thức thanh toán
                </div>
                <div className="col-span-1 text-right font-medium">
                  {order?.paymentMethod}
                </div>
                <div className="col-span-1 text-left">Tạm tính</div>
                <div className="col-span-1 text-right font-medium">
                  {formatCurrency(order?.totalPrice)}
                </div>
                <div className="col-span-1 text-left">Phí giao hàng</div>
                <div className="col-span-1 text-right font-medium">
                  {formatCurrency(order?.shippingFee)}
                </div>
                <div className="col-span-1 text-left">
                  Khách hàng thanh toán
                </div>
                <div className="col-span-1 text-right font-medium">
                  {formatCurrency(+order?.totalPrice + +order?.shippingFee)}
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-gray-300"></div>
            <div className="text-justify text-13px">
              Xin cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của chúng tôi!
              Chúng tôi rất mong được phục vụ bạn trong thời gian tới.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
