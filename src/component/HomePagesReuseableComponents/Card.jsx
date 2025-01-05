function Card({ item1, item2, item3, item4, item5, imageSrc }) {
    return (
      <>
        <div className="card bg-base-100 w-96 shadow-xl rounded-sm">
          <figure>
            <img src={imageSrc} alt={item1} />
          </figure>
          <div className="card-body p-5">
            <p className="font-bold">{item1}</p>
            <p className="text-pink-500">{item2}</p>
            <div className="flex space-x-3">
              <div className="rounded-full bg-red-800 h-[2rem] w-[2rem]"></div>
              <div className="rounded-full bg-purple-900 h-[2rem] w-[2rem]"></div>
              <button className="btn btn-xs">+2</button>
            </div>
            <p className="text-pink-500">{item3}</p>
            <p className="text-pink-500">{item4}</p>
            {item5 && <p className="text-gray-500">{item5}</p>}
          </div>
          <button className="btn bg-pink-600 text-white w-full h-12 rounded-none">
            Add To Cart
          </button>
        </div>
      </>
    );
  }
  
  export default Card;
  