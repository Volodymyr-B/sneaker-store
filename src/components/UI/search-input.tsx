import { FC, InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  reset: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({
  reset,
  value,
  ...props
}) => {
  return (
    <div className="flex items-center relative h-full mr-4">
      <input
        value={value}
        {...props}
        className="h-9 w-full bg-app-primary_hover px-5"
        type="text"
      />
      {value ? (
        <button
          onClick={reset}
          className="h-9 w-9 absolute -right-4
        flex items-center justify-center bg-app-primary_hover hover:bg-app-primary_action"
        >
          <GrClose />
        </button>
      ) : (
        <div
          className="h-9 w-9 absolute -right-4
        flex items-center justify-center bg-app-primary_hover"
        >
          <BsSearch />
        </div>
      )}
    </div>
  );
};
