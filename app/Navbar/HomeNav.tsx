import React from "react";

const HomeNav = () => {
  return (
    <div className="container-fluid bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mb-0">Diwali Shop</h1>
          </div>
          <div className="col-auto d-flex align-items-center">
            <a href="#" className="text-white text-decoration-none me-3">
              Home
            </a>
            <a href="#" className="text-white text-decoration-none me-3">
              Contact
            </a>
            <a href="#" className="text-white text-decoration-none me-3">
              About
            </a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
