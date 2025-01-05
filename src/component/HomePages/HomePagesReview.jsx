import HomePageReViewReUseCard from "../HomePagesReuseableComponents/HomePageReViewReUseCard";
function HomePagesReview() {
  return (
    <>
      <div className=" hero bg-pink-300 flex-col justify-center items-center">
        <div className="text-[#551447] font-bold text-center md:mt-[-26rem] mt-[-20rem]  text-3xl">
          Loved By EveryOne
        </div>
        <div className=" md:m-18 m-8">
          <div className="carousel  rounded-box md:space-x-24 mt-20 md:ml-10 md:mr-10">
            <HomePageReViewReUseCard item1={"https://typsybeauty.com/cdn/shop/files/IMAGE-4_a98edde4-9d96-4229-9bd8-6c94c08aeaea.jpg?v=1729758550"} item2={"Cute Blush"} />
            <HomePageReViewReUseCard item1={"https://typsybeauty.com/cdn/shop/files/IMAGE-9.jpg?v=1726838467"} item2={"Cute Blush"}/>
            <HomePageReViewReUseCard item1={"https://typsybeauty.com/cdn/shop/files/IMAGE-2_e9c4b925-0a22-4e81-bc25-09c25cace193.jpg?v=1726838466"} item2={"Cute Blush"}/>
            <HomePageReViewReUseCard item1={"https://typsybeauty.com/cdn/shop/files/IMAGE-10_b4be0eb8-0f7b-4f2c-be6a-5727fad60ddc.jpg?v=1729758562"} item2={"Cute Blush"} />
            <HomePageReViewReUseCard item1={"https://typsybeauty.com/cdn/shop/files/IMAGE-12_7308f0b4-d196-4908-ba15-dd7825ccf7a1.jpg?v=1729758572"} item2={"Cute Blush"} />
          </div>
        </div>
      </div>
    </>
  );
}
export default HomePagesReview;
