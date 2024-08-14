import React from "react";

const WeOffers = () => {
  return (
    <div className="flex justify-center items-center mt-44 relative">
      <div className="group flex flex-col items-start transition-all duration-300">
        <span className="mb-2 transform -rotate-90 group-hover:rotate-0 transition-transform duration-500">
          Item 1
        </span>
        {/* Additional items can be uncommented here if needed */}
        {/* <span className="mb-2 transform -rotate-90 group-hover:rotate-0 transition-transform duration-500">
          Item 2
        </span>
        <span className="transform -rotate-90 group-hover:rotate-0 transition-transform duration-500">
          Item 3
        </span> */}

        {/* The paragraph that slides in from the right and appears below the items on hover */}
        <div className="relative">
          <div className="absolute left-full w-72 transform group-hover:left-0 group-hover:translate-x-0 translate-x-full transition-all duration-1000 ease-in-out opacity-0 group-hover:opacity-100 mt-4">
            This is a paragraph that appears below the item when hovered.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeOffers;
