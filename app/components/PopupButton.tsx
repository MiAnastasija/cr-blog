"use client";
import React, { useState } from "react";
import PopupForm from "./PopupForm";

const PopupButton: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button
        className=" text-white px-12 py-1 rounded-md   border-[1px] border-white w-25"
        onClick={handleOpenPopup}
      >
        Get started Now
      </button>
      {showPopup && <PopupForm onClose={handleClosePopup} />}
    </div>
  );
};

export default PopupButton;
