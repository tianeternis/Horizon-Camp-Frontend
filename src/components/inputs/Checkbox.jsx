import { BsCheck } from "react-icons/bs";

const Checkbox = ({ value = "", onChange = () => {}, checked, ...props }) => {
  return (
    <div className="grid items-center justify-center">
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked}
        className="peer col-start-1 row-start-1 h-4 w-4 appearance-none rounded border border-slate-400 ring-transparent checked:border-main checked:bg-main forced-colors:appearance-auto"
        {...props}
      />
      <BsCheck className="pointer-events-none invisible col-start-1 row-start-1 stroke-white text-white peer-checked:visible forced-colors:hidden" />
    </div>
  );
};

export default Checkbox;
