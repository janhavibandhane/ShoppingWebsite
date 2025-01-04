import { useEffect } from "react";

function HomePagesArtical() {
  return (
    <>
      <div className="carousel w-full md:h-[30rem] h-[13rem]">

        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://typsybeauty.com/cdn/shop/files/Glossified-Lip-Plumper.jpg?v=1730265104&width=2000"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://typsybeauty.com/cdn/shop/files/Desktop-Banner_74b8a9da-7d39-4d7f-92c3-d9521c7e4195.jpg?v=1733899102&width=2000"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://typsybeauty.com/cdn/shop/files/Desktop-Banner-Revised.jpg?v=1734001115&width=2000"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://typsybeauty.com/cdn/shop/files/Concealer_e2a92eb8-7a5e-41a1-a9b0-557571300a11.jpg?v=1730265126&width=2000"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default HomePagesArtical;
