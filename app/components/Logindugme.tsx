import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Logindugme: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Link href="https://platform.capitalrevo.com/login">
      <button
        className="text-white box-border flex flex-row justify-center items-center w-full py-2.5 px-5 gap-3 lg:w-16 xl:w-24 h-10 border border-white rounded-lg"
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Logindugme;
