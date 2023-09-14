import { forwardRef } from "react";

interface FormTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className="h-44 w-full">
        <textarea
          placeholder="Leave comment here"
          cols={30}
          rows={5}
          className="resize-none shadow-md w-full p-2"
          ref={ref}
          {...props}
        />
        {error && <div className="text-red-400">{error}</div>}
      </div>
    );
  }
);
FormTextarea.displayName = "FormTextarea";
