import React from "react";

function NurserySection() {
  return (
    <div className="nursery-container">

      {/* Left Section */}
      <div className="nursery-left">
        <img 
          src="https://images.unsplash.com/photo-1592150621744-aca64f48394a"
          alt="Nursery"
        />
      </div>

      {/* Right Section */}
      <div className="nursery-right">

        <h2>
          Struggling to Manage Your Nursery Efficiently? 🌱
        </h2>

        <p>
          GreenNest is the perfect solution for modern nursery management.
          It helps you easily organize plant inventory, track sales,
          manage customer records, and streamline daily operations in one place.
          With its simple and user-friendly system, GreenNest saves time,
          reduces manual work, and helps your nursery grow smoothly.
        </p>

        <button className="grow-btn">
          Start Growing Now !
        </button>

      </div>

    </div>
  );
}

export default NurserySection;