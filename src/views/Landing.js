import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import GoogleReviews from "components/Reviews/GoogleReviews.js";
import MapExample from "components/Maps/MapExample.js";
import SVGAxe from "components/SVG/Axe.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-60">
        <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2F580843_d621a3e93f2f48848277778127aca2f8_mv2-min.jpg?alt=media&token=ab54332c-fc67-4f8a-9a17-4542b5380fd3')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    Lowest Rates Anywhere!
                  </h1>
                  <button
                  className="bg-white text-blueGray-700 active:bg-blueGray-50 text-sm font-bold uppercase px-6 py-3 mt-6 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('reserve-now').scrollIntoView({behavior: 'smooth'});
                  }}
                >
                  <i className="fas fa-calendar-check"></i> Reserve Now
                </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom--2 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blueGray-600">
                      <i className="fas fa-object-ungroup"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Bigger</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      With over 4,200 sqft of space and 14 targets, 
                      we always have room for you at Get Axed whether you want to throw a kick-axe birthday party, 
                      connect with friends, or have an unforgettable first date. 
                      Get Axed is your premier destination. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blueGray-600">
                      <i className="fas fa-bullseye"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Better</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Gone are the days of throwing at the same middle target! 
                      Get Axed offers state of the art equipment to enhance your axe throwing experience with multiple game options. 
                      With a simple click of a mouse, players can customize their experience by selecting games such as zombie, tic-tac-toe, 
                      and of course the traditional target throwing. 
                      Whatever you are in the mood for, Get Axed has you covered.  
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blueGray-600">
                      <i className="fas fa-briefcase-medical"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Safer</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      At Get Axed your safety is our number one priority which is why we designed our bays so that only one person is at the throwing lane. 
                      Each lane is reinforced with galvanized steel fencing so you don't have to worry about what the person in the next bay is doing and allows you to throw at your own pace.  
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-hand-holding-usd text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Lowest Rates Anywhere!
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Introducing the lowest rates you'll find anywhere. 
                  Why pay more at other axe throwing bars just to get less? 
                  Get Axed provides you with <b>more beer options, more games, more T.V.'s, and more single lane bays!</b> 
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Reserve your lane online ahead of time to ensure you're throwing axes right when you walk-in.
                  Grab a beer, hit the lane, and start the fun.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                GUARANTEE YOUR SPOT NOW!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-600">
                  <img
                    alt="..."
                    src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2F580843_5ef57b11980f40d7b2947719fe22e030_mv2-min.jpg?alt=media&token=4f854442-daa1-4514-8a64-59e2877636f9"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Walk-ins
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Walk-ins are always welcome as long as targets are available. 
                      You may have to wait a bit before we can get you on a lane but you can always chat with the staff, 
                      have a beer with us or watch the game on one of our 10 large screen TVs while we get you ready. 


                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative pt-20 pb-15">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20"
            style={{ transform: "translateZ(0)", "margin-top": "-78px"  }}
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                {/*<img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2Fgiphy.gif?alt=media&token=efbc9f93-b18b-40ef-9e8a-487e2bafba1e"
                />*/}
                <video 
                  className="max-w-full rounded-lg shadow-lg"
                  autoPlay loop muted playsInline
                  src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/videos%2Fgiphy.mp4?alt=media&token=f65f56b9-3443-4ea5-a303-aca15b78b7ce"
                >
                </video>

              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-music text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">All Music Trivia</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Join us every tuesday for music trivia and axe throwing! Only $20 per person....
                    That's right you get two hours of axe throwing and trivia for $20, 
                    that's a crazy low price for that amount of fun. Reserve your space now!
                  </p>
                  <button
                  className="bg-blueGray-600 text-white active:bg-blueGray-50 text-base font-bold uppercase px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 mt-5 mb-3 ease-linear transition-all duration-150"
                  type="button"
                  onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('reserve-now').scrollIntoView({behavior: 'smooth'});
                  }}
                  >
                  <i className="fas fa-calendar-check"></i> Book Now
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-15 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24" id="google-reviews">
            </div>
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Our happy customers!</h2>
              </div>
            </div>
              <GoogleReviews />
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800 -mb-1">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20"
            style={{ transform: "translateZ(0)", "margin-top": "-78px" }}
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 pt-24 lg:pb-64" id="reserve-now">
            <div className="flex flex-wrap text-center justify-center">
              <div className="container px-4 mx-auto">

                <div className="flex flex-wrap"> 
                  <div className="w-full lg:pr-4 flex-1 flex">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 cursor-pointer">
                      <img
                        alt="..."
                        src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2Fstuck-axe-outline-white.jpg?alt=media&token=db136ec9-2847-4746-aa34-c2c76789e990"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4 flex h-full flex-col	justify-between items-center	">
                        <h2 className="text-4xl font-bold text-blueGrey-600 bg-blueGrey-600">
                          Axe Throwing
                        </h2>
                        <h2 className="text-3xl text-blueGrey-600 bg-blueGrey-600 mt-4">
                          $15 per Person
                        </h2>
                        <h2 className="text-2xl text-blueGrey-600 bg-blueGrey-600 mt-4">
                          $10 for every additional 30min
                        </h2>
                        <p className="text-xl font-light text-blueGrey-600 mt-4">
                          M-F: 4pm to 10pm<br />
                          S-S: 12pm to 10pm
                        </p>
                        <button className="bg-blueGray-600 text-white mt-4 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          60 Minutes
                        </button>
                      </blockquote>
                    </div>
                  </div>
                  <div className="w-full lg:px-4 md:px-4 flex-1 flex">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 cursor-pointer">
                      <img
                        alt="..."
                        src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2Fmusic-trivia.jpg?alt=media&token=e5ec5d0f-0b90-4d6e-9ff1-17ebd497fbf2"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4 flex h-full flex-col	justify-between items-center	">
                        <h2 className="text-4xl font-bold text-blueGrey-600 bg-blueGrey-600">
                          Music Trivia
                        </h2>
                        <h2 className="text-3xl text-blueGrey-600 bg-blueGrey-600">
                          $20 per Person
                        </h2>
                        <p className="text-xl font-light mt-2 text-blueGrey-600">
                          Tuesday: 6pm to 8pm
                        </p>
                        <button className="bg-blueGray-600 text-white mt-3 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          2 Hours
                        </button>
                      </blockquote>
                    </div>
                  </div>
                  <div className="w-full lg:pl-4 flex-1 flex">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 cursor-pointer">
                      <img
                        alt="..."
                        src="https://firebasestorage.googleapis.com/v0/b/getaxed-b55f7.appspot.com/o/pictures%2Fparty-white.jpg?alt=media&token=acbc2640-23ee-4150-a07b-5586e112c4ab"
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4 flex h-full flex-col	justify-between items-center	">
                        <h2 className="text-4xl font-bold text-blueGrey-600 bg-blueGrey-600">
                          Party
                        </h2>
                        <h2 className="text-3xl text-blueGrey-600 bg-blueGrey-600">
                          $20 per Person
                        </h2>
                        <p className="text-xl font-light mt-2 text-blueGrey-600">
                          M-F: 12pm to 10pm<br />
                          S-S: 12pm to 10pm
                        </p>
                        <button className="bg-blueGray-600 text-white mt-3 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          2 Hours
                        </button>
                      </blockquote>
                    </div>
                  </div>
                  <SVGAxe />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <MapExample />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
