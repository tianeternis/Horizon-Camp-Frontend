import { useDynamicTitle } from "@/hooks";
import BodyLayout from "@/layouts/BodyLayout";
import { formatDateToDDMMYYYY } from "@/utils/format/date";
import { FaClock, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PicnicGuideDetail = ({}) => {
  const guide = useLoaderData();

  useDynamicTitle(guide?.title);

  return (
    <BodyLayout>
      <div className="mx-auto max-w-screen-lg rounded-sm bg-white">
        <div className="space-y-6 px-6 py-4">
          <div className="space-y-1">
            <div className="text-lg font-semibold sm:text-xl">
              {guide?.title}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-main sm:text-13px">
                  <FaUser />
                </span>
                <span className="text-xs sm:text-13px">
                  {guide?.author?.fullName}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-main sm:text-13px">
                  <FaClock />
                </span>
                <span className="text-xs sm:text-13px">
                  {formatDateToDDMMYYYY(guide?.publishedAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-13px sm:text-sm">
            <div className="text-justify">{guide?.summary}</div>
            <div dangerouslySetInnerHTML={{ __html: guide?.content }}></div>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default PicnicGuideDetail;
