function ProductPagesLayoutCompo({Item1,Item2,Item3}){
    return(
        <>
        <div className=" bg-[#fee9e6] p-10 w-full mt-[-1rem]">
       <div className="font-Gupter md:text-6xl text-3xl text-[#551447] font-bold text-center pt-10 ">{Item1}</div>
       <div className=" md:flex md:flex-row md:justify-evenly mt-4 pb-2 flex flex-col justify-center items-center md:space-x-1 md:space-y-0 space-y-4">
       {Item2}
       </div>
       <div className=" md:flex md:flex-row md:justify-evenly mt-4 pb-2 flex flex-col justify-center items-center md:space-x-1 md:space-y-0 space-y-4">
       {Item3}
       </div>
    </div>
        </>
    )
}
export default ProductPagesLayoutCompo;