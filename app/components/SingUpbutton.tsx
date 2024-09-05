import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Link href="https://platform.capitalrevo.com/login">
      <button
        className="flex justify-center items-center py-2.5 px-5 gap-3 lg:w-28 xl:w-32 h-10 bg-white rounded-lg text-navcolor mt-2 lg:mt-0 w-full "
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
