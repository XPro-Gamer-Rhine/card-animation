import React from "react";

const Card = ({ image, width, height }: any) => {
  return (
    <div
      className={`card glass ${
        String(width).toUpperCase() === "FULL" ? "w-[800px]" : "w-96"
      } h-[500px]`}
    >
      <figure>
        <img src={image} alt="car!" className="object-cover  w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
