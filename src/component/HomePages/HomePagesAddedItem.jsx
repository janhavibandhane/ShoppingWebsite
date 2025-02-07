import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

function HomePagesAddedItem() {
  const { cart, removeFromCart } = useCart(); // Get cart from context

  return (
    <div className="bg-[#fee9e6] hero">
    <div className="p-6 max-w-4xl mx-auto  ">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#551447] ">
        🛒 Items in Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-[#834a76]">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((item, index) => (
            <>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.imageSrc}
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="p-4">
                <p className="font-semibold text-lg">{item.item1}</p>
                <p className="text-gray-600">{item.item2}</p>
                <p className="text-gray-600">{item.item3}</p>
                <p className="text-gray-600">{item.item4}</p>
                {item.item5 && <p className="text-gray-600">{item.item5}</p>}
                <button 
                  className="mt-3 flex items-center gap-2 text-red-500 hover:text-red-700"
                  onClick={() =>removeFromCart(item.id)}  
                >
                  <FaTrash className="w-5 h-5" /> Remove
                </button>
              </div>
            </div>
            </>
          ))}
        </div>
      )}
      {cart.length === 0 ? (
        <p className=""></p>
      ) : (
        <div className=" flex justify-center items-center m-4">
          <Link to={'/USerDetalis'}><button className="btn btn-wide bg-pink-600 hover:bg-pink-400">Checkout</button></Link>
        </div>
      )}
    </div>
    </div>
  );
}

export default HomePagesAddedItem;