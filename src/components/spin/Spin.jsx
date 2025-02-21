import { ImSpinner6 } from "react-icons/im";

const Spin = ({}) => {
  return (
    <span
      className="flex w-fit animate-spin items-center justify-center text-primary"
      style={{ fontSize: "inherit" }}
    >
      <ImSpinner6 />
    </span>
  );
};

export default Spin;
