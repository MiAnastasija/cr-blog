import Link from "next/link";
import React from "react";

interface CompareAccountsButton {
    children: React.ReactNode;
    onClick?: () => void;
}

const CompareAccountsButton: React.FC<CompareAccountsButton> = ({ children, onClick }) => {
    return (
      <Link href="/compare-accounts">
        <button
              className=" px-4 py-3 gap-2 w-60 h-14 bg-black rounded-xl shadow-xs text-white text-[18px]"

        onClick={onClick}
      >
        {children}
      </button>
      </Link>
       );
    };
    
    export default CompareAccountsButton;