import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold pb-2">Contact</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                721 Sterling Pkwy<br />
                Lincoln, CA 95648
              </h5>
              <a 
                className="text-md mt-0 mb-2 text-blueGray-600"
                href="mailto:Support@GetAxed.com"
              >
                Support@GetAxed.com
              </a>
              <br />
              <a 
                className="text-md mt-0 mb-2 text-blueGray-600"
                href="tel:916-209-3834"
              >
                916-209-3834
              </a>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blueGrey-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => {
                    window.open('https://www.facebook.com/GetAxedLincoln')
                  }}
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-blueGrey-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => {
                    window.open('https://www.twitter.com/get_axed')
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blueGrey-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                  onClick={() => {
                    window.open('https://www.instagram.com/get_axed_lincoln')
                  }}
                >
                  <i className="fab fa-instagram"></i>
                </button>

              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">
                    Hours
                  </span>
                  <ul className="list-unstyled">
                    <li className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm">
                        Monday - Friday
                    </li>
                    <li className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm">
                        4PM - 10PM
                    </li>
                    <li className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm">
                        Saturday - Sunday
                    </li>
                    <li className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm">
                        12PM - 10PM
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-lg font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                      >
                        Reserve Lane
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=nr-footer"
                      >
                        Reserve Music Trivia
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=nr-footer"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nr-footer"
                      >
                        Waiver
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} 
                {" "}
                <a
                  href="/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >GetAxed.web.app
                </a>
                {" "}by{" "}
                <a
                  href="https://benlebich.com"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Ben Lebich
                </a>
                {"  |  "}<a
                  href="/privacy-policy"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
