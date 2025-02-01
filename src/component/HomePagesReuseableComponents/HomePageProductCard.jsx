import { useCart } from "../Context/CartContext.jsx";
import { useState } from "react";

function HomePageProductCard({ item1, item2, item3, item4, item5, imageSrc }) {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  
  const product = {
    item1,
    item2,
    item3,
    item4,
    item5,
    imageSrc,
  };

  const handleAddToCart = () => {
    addToCart(product); // Add item to cart
    setShowAlert(true);  // Show the alert
    setTimeout(() => {
      setFadeOut(true); // Start the fade-out effect
    }, 2500);  // Wait for 2.5 seconds before starting fade-out

    setTimeout(() => {
      setShowAlert(false); // Hide the alert after the fade-out
      setFadeOut(false);  // Reset the fade-out state
    }, 3000);  // Wait for 3 seconds total before removing the alert
  };

  return (
    <>
      <div className="card bg-base-100 w-80 shadow-xl rounded-sm">
        <figure>
          <img src={imageSrc} alt="img" className="w-96 md:h-72 h-60" />
        </figure>
        <div className="card-body p-5 space-y-[-1rem]">
          <p className="font-bold text-[#551447] font-Gupter">{item1}</p>
          <p className="text-pink-500">{item2}</p>
          <p className="text-pink-500">{item3}</p>
          <p className="text-pink-500">{item4}</p>
          {item5 && <p className="text-gray-500">{item5}</p>}
        </div>
        <button
          className="btn bg-pink-600 text-white w-full h-12 rounded-none"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>

      {/* Success Alert */}
      {showAlert && (
        <div
          role="alert"
          className={`alert alert-success absolute top-16 right-5 z-50 p-4 w-[20rem] bg-green-500 text-white flex items-center gap-2 rounded-lg shadow-lg transition-opacity duration-1000 ${fadeOut ? "opacity-0 visibility-hidden" : "opacity-100 visibility-visible"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Item added successfully</span>
        </div>
      )}
    </>
  );
}

export default HomePageProductCard;
