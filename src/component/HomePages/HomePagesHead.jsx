import { useEffect } from "react";
import { Link } from "react-router-dom";
function HomePagesHead() {
  return (
    <>
      <div className="navbar bg-[#ffd1d1] h-[8rem] flex justify-evenly md:p-20">
        
          <div className="avatar">
            <div className="md:w-24 w-16 rounded-full">
              <Link to={"/ProductsLipstick"}><img src="https://typsybeauty.com/cdn/shop/files/Lips_bcc3307a-6d67-4b9d-ac7e-da6e9845c78a.jpg?v=1729758069" /></Link>
            </div>
          </div>
          <div className="avatar">
            <div className="md:w-24 w-16 rounded-full">
              <Link to={"/ProductForEyes"}><img src="https://typsybeauty.com/cdn/shop/files/Eyes_638af8c9-673c-4288-8bd1-8434265dc272.jpg?v=1729758069" /></Link>
            </div>
          </div>
          <div className="avatar">
            <div className="md:w-24 w-16 rounded-full">
              <Link to={"/ProductsBlush"}><img src="https://typsybeauty.com/cdn/shop/files/Face_13b4479d-461f-45e1-b335-e3ffb4c65047.jpg?v=1729758069" /></Link>
            </div>
          </div>
          <div className="avatar">
            <div className="md:w-24 w-16 rounded-full">
              <Link to={"/ProductBrushes"}><img src="https://typsybeauty.com/cdn/shop/files/Accessories_420fbf71-eade-4e05-b3f9-c64815f83de6.jpg?v=1729758068" /></Link>
            </div>
          </div>

          
        </div>
     
    </>
  );
}
export default HomePagesHead;
