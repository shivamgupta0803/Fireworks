import React from "react";
import image from "./img/HomeImage.png.avif";
import Standard from "./Standard";

function DiwaliProducts() {
  return (
    <>
    <div className="container">
      
      <div className="container my-5">
        <img src={image} className="img-fluid diwali-image h-50" alt="Diwali Home"  />
      </div>

      <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
      
    <Standard/>
    </div>
      <footer className="container-fluid bg-dark text-white py-3">
        <div className="container text-center">&copy; 2024 Diwali Shop</div>
      </footer>
    </>
  );
}

export default DiwaliProducts;
