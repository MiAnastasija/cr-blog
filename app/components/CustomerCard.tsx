"use client";
import { useState } from "react";

type Customer = {
  name: string;
  comment: string;
};

type CustomerCardProps = {
  customers: Customer[];
};

const CustomerCard: React.FC<CustomerCardProps> = ({ customers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white w-[300px] md:w-[467px]   flex ">
      <div className="flex-col ">
        {" "}
        <h2 className=" font-bold mb-4">{customers[currentIndex].name}</h2>
        <p className="mb-4 text-xs">{customers[currentIndex].comment}</p>
      </div>
      <div className="flex justify-between gap-4 pl-10">
        <button
          onClick={handlePrev}
          className=" text-gray-600 font-bold rounded-full w-8 h-8 border-gray-300 hover:bg-gray-200 transition-colors duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className=" text-gray-600 font-bold  rounded-full w-8 h-8  border-gray-300 hover:bg-gray-200 transition-colors duration-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
