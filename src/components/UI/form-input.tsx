import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeholder?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, type = "text", placeholder, ...props }, ref) => {
    return (
      <div className="h-20 w-full relative">
        <input
          className="w-full rounded-md p-3 ring-1 focus:ring-2 box-border peer"
          autoComplete="off"
          placeholder=" "
          type={type}
          ref={ref}
          {...props}
        />
        <label
          className="absolute peer-focus:text-sm text-app-secondary_hover duration-300 transform 
        -translate-y-4 scale-75 top-3 origin-[0] left-2.5 peer-focus:text-blue-600
        peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75 peer-focus:-translate-y-4 -z-10"
        >
          {placeholder}
        </label>
        {error && <span className="text-red-500 block pt-[2px]">{error}</span>}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
