import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  placeholder?: string;
}

export const Input = ({ icon, placeholder, ...props }: InputProps) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2.5 pl-10 bg-slate rounded-full focus:outline-none"
        {...props}
      />
      {icon && (
        <div className="absolute left-3 flex items-center pointer-events-none text-2xl">
          {icon}
        </div>
      )}
    </div>
  );
};
