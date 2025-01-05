function Card() {
    return (
      <>
        <div className="card bg-base-100 w-96 shadow-xl rounded-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body p-5">
            <p className="font-bold">Powder tint Technology</p>
            <p className="text-pink-500">PH-ANTASTIC COLOU...</p>
            <div className="flex space-x-3">
              <div className="rounded-full bg-red-800 h-[2rem] w-[2rem]"></div>
              <div className="rounded-full bg-purple-900 h-[2rem] w-[2rem]"></div>
              <button className="btn btn-xs">+2</button>
            </div>
            <p className="text-pink-500">
              SHADE: plum pie 01: deep reddish-purple
            </p>
            <p className="text-pink-500">₹ 899.00</p>
          </div>
          <button className="btn bg-pink-600 text-white w-full h-12 rounded-none">
            Add To Cart
          </button>
        </div>
      </>
    );
  }
  
  export default Card;
  