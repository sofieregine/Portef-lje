import { FC, forwardRef, ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

const OldButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" hover:cursor-pointer hover:bg-blue-300/30 bg-blue-300 rounded-lg px-4 py-5 "
    >
      {children}
    </button>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={` hover:cursor-pointer hover:bg-blue-300/30 bg-blue-300 rounded-lg px-4 py-5 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
