import React from "react";
import { Link } from "react-router-dom";
import * as images from "../constant/images";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="navbar_box">
        <nav className="navbar navbar-expand-lg mt-0 mt-lg-4 navbar_banner p-0 m-0">
          <div className="container pt-2 pb-2">
            <div className="d-flex w-25 justify-content-center mobile_form_responsive1">
              <Link className="navbar-brand" to="/">
                <img src={images.Logo} alt="logo" width={130} />
              </Link>
            </div>
            <button
              className="navbar-toggler toggle_btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <AlignJustify size={25} color="white" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link ps-3 pe-3 active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ps-3 pe-3" to="#">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ps-3 pe-3" to="#">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ps-3 pe-3" to="#">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ps-3 pe-3" to="#">
                    About
                  </Link>
                </li>
              </ul>
              <form
                className="d-flex pb-2 pb-lg-0 align-items-baseline w-50 justify-content-center gap-4 p-0 m-0 mobile_form_responsive"
                role="search"
              >
                <Link className="text-decoration-none" to="#">
                  <p className="login_btn p-0 m-0">Login</p>
                </Link>
                <Link className="text-decoration-none" to="#">
                  <button
                    className="signup_btn rounded-3 p-2 ps-4 pe-4"
                    type="submit"
                  >
                    Sign up
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
