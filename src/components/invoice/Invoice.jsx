import logo from "@/assets/images/logo.webp";
import { formatAddress } from "@/utils/format/address";
import { formatCurrency } from "@/utils/format/currency";
import { formatDateToHHMMDDMMYYYY } from "@/utils/format/date";
import { useTranslation } from "react-i18next";
import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

const Invoice = ({ order }) => {
  const { t } = useTranslation();

  const getBase64ImageFromURL = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleDownloadInvoice = async () => {
    const logoBase64 = await getBase64ImageFromURL(logo);

    const docDefinition = {
      pageMargins: [80, 60, 80, 60],
      content: [
        {
          image: logoBase64,
          width: 80,
          alignment: "center",
        },
        { text: "Horizon Camp", style: "shopName" },
        { text: t("invoice.title"), style: "header" },
        {
          columns: [
            {
              text: `${t("invoice.order_id")}: #${order?._id}`,
              style: "info",
              margin: [0, 0, 0, 16],
            },
            {
              text: `${t("invoice.order_date")}: ${formatDateToHHMMDDMMYYYY(order?.orderDate)}`,
              style: "info",
              alignment: "right",
              margin: [0, 0, 0, 16],
            },
          ],
        },
        {
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                {
                  text: [
                    { text: `${t("invoice.customer")}: `, bold: true },
                    order?.address?.fullName,
                  ],
                  margin: [0, 4],
                },
                {
                  text: [
                    { text: `${t("invoice.phone")}: `, bold: true },
                    order?.address?.phone,
                  ],
                  margin: [0, 4],
                  alignment: "right",
                },
              ],
            ],
          },
          layout: "noBorders",
          style: "table",
        },
        {
          text: [
            { text: `${t("invoice.address")}: `, bold: true },
            formatAddress({
              province: order?.address?.provinceName,
              district: order?.address?.districtName,
              ward: order?.address?.wardName,
              details: order?.address?.detailAddress,
            }),
          ],
          margin: [0, 4, 0, 18],
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "auto", "auto", "auto"],
            body: [
              [
                { text: "#", bold: true, margin: [2, 6], alignment: "center" },
                {
                  text: t("invoice.product"),
                  bold: true,
                  margin: [2, 6],
                  alignment: "center",
                },
                {
                  text: t("invoice.unit_price"),
                  bold: true,
                  margin: [2, 6],
                  alignment: "center",
                },
                {
                  text: t("invoice.quantity"),
                  bold: true,
                  margin: [2, 6],
                  alignment: "center",
                },
                {
                  text: t("invoice.total_price"),
                  bold: true,
                  margin: [2, 6],
                  alignment: "center",
                },
              ],
              ...order?.orderDetails?.map((item, index) => [
                { text: index + 1, margin: [2, 6], alignment: "center" },
                {
                  text: [
                    { text: item?.name },
                    ...(() => {
                      let variant = [];
                      if (item?.color) variant.push(item?.color);
                      if (item?.size) variant.push(item?.size);

                      return variant.length > 0
                        ? [
                            {
                              text: `\n${t("invoice.variant")}: ${variant.join(", ")}`,
                              fontSize: 11,
                              marigin: [0, 4, 0, 0],
                            },
                          ]
                        : [];
                    })(),
                  ],
                  margin: [2, 6],
                },
                {
                  text: formatCurrency(item?.discountedPrice),
                  margin: [2, 6],
                  alignment: "center",
                },
                { text: item?.quantity, margin: [2, 6], alignment: "center" },
                {
                  text: formatCurrency(item?.discountedPrice * item?.quantity),
                  margin: [2, 6],
                  alignment: "center",
                },
              ]),
            ],
          },
        },
        {
          table: {
            widths: ["50%", "50%"],
            body: [
              [
                { text: t("invoice.payment_method"), margin: [0, 14, 0, 6] },
                {
                  text: order?.paymentMethod,
                  bold: true,
                  alignment: "right",
                  margin: [0, 14, 0, 6],
                },
              ],
              [
                { text: t("invoice.sub_price"), margin: [0, 6] },
                {
                  text: formatCurrency(order?.totalPrice),
                  bold: true,
                  alignment: "right",
                  margin: [0, 6],
                },
              ],
              [
                { text: t("invoice.shipping_fee"), margin: [0, 6] },
                {
                  text: formatCurrency(order?.shippingFee),
                  bold: true,
                  alignment: "right",
                  margin: [0, 6],
                },
              ],
              [
                { text: t("invoice.subtotal"), margin: [0, 6] },
                {
                  text: formatCurrency(
                    +order?.totalPrice + +order?.shippingFee,
                  ),
                  bold: true,
                  alignment: "right",
                  margin: [0, 6],
                },
              ],
            ],
          },
          layout: "noBorders",
          style: "table",
        },
        { text: "\n" },
        {
          canvas: [
            { type: "line", x1: 0, y1: 5, x2: 436, y2: 5, lineWidth: 1 },
          ],
        },
        {
          text: `\n${t("invoice.notes")}`,
          style: "footer",
        },
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          alignment: "center",
          margin: [0, 40],
        },
        shopName: {
          fontSize: 18,
          bold: true,
          alignment: "center",
          color: "#5d2828",
          margin: [0, 8, 0, 0],
        },
        info: { fontSize: 12 },
        table: {
          fontSize: 12,
        },
        footer: {
          fontSize: 12,
          alignment: "justify",
          margin: [0, 12, 0, 0],
        },
      },
    };

    pdfMake
      .createPdf(docDefinition)
      .download(
        `HorizonCamp_${t("invoice.file_name_invoice")}_${order?._id}.pdf`,
      );
  };

  return (
    <div>
      <button
        className="w-40 rounded bg-red-600 px-8 py-2.5 text-13px font-medium text-white hover:bg-red-700 sm:w-52"
        onClick={() => handleDownloadInvoice()}
      >
        {t("invoice.download")}
      </button>
      {/* <div className="w-full px-10 py-16 font-main">
        <div className="mx-auto w-[600px] space-y-10">
          <div className="flex flex-col items-center justify-center gap-3">
            <img src={logo} className="w-20" />
            <div className="text-lg font-semibold uppercase tracking-widest text-secondary">
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
      </div> */}
    </div>
  );
};

export default Invoice;
