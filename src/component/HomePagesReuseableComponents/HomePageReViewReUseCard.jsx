function HomePageReViewReUseCard({item1,item2,item3}) {
  return (
    <>
      <div className="carousel-item flex flex-col ">
        <div>
          <img
            src={item1}
            alt="Drink"
            className=" border-white border-4 md:w-96 md:h-96 w-72 h-72"
          />
        </div>
        <div>
          <div className="text-[#551447] text-center">{item2}</div>
          <div className="text-white">
            {item3}
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePageReViewReUseCard;
