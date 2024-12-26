import { useTopPage } from "@/hooks";

const BodyLayout = ({ children }) => {
  useTopPage();

  return (
    <div className="w-full py-8">
      <div className="mx-auto max-w-screen-xl px-3">{children}</div>
    </div>
  );
};

export default BodyLayout;
