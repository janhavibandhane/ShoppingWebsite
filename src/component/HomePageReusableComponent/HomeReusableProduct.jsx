import { GoArrowUpRight } from "react-icons/go";
function HomeReusableProduct({item1}){
    return(
        <>
         <div className=" md:h-[30rem] min-w-96   ">
  <figure>
    <img
      src={item1}
      alt="Shoes" 
      className="md:h-[20rem] min-w-96 border border-black"
      />
  </figure>
  <div className="card-body">
  <div className=" font-Gupter text-xl font-semibold">
                HAND CREAM
            </div>
            <hr className="  mt-4 bg-black text-black h-[0.1rem]"></hr>
            <div className=" flex justify-between mt-2">
            <div className=" font-Gupter text-3xl p-1">
                $80
            </div>
            <div className=" font-Gupter text-3xl w-8 h-8 bg-black text-white">
            <GoArrowUpRight className="p-1" /> 
            </div>
            </div>
  </div>
</div>

            {/* <div>
            <div className=" lg:w-[23rem] lg:h-[23rem]  w-[18rem] h-[18rem] bg-[#e3dad2] border-black border">
            </div>
            <div className=" font-Gupter text-xl font-semibold">
                HAND CREAM
            </div>
            <hr className="  mt-4 bg-black text-black h-[0.1rem]"></hr>
            <div className=" flex justify-between mt-2">
            <div className=" font-Gupter text-3xl p-1">
                $80
            </div>
            <div className=" font-Gupter text-3xl w-8 h-8 bg-black text-white">
            <GoArrowUpRight className="p-1" /> 
            </div>
            </div>
            </div> */}
        
        </>
    )
}
export default HomeReusableProduct;