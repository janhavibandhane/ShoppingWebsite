import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePageProductCard from "../HomePagesReuseableComponents/HomePageProductCard";
import { useCart } from "../Context/CartContext";


function HomePageProduct() {

  const { addToCart } = useCart();
  const products=[
    {
      id:1,
      imageSrc:"https://typsybeauty.com/cdn/shop/files/Plum-Pie_93271a68-4b43-48df-8639-4aa949b246f5.jpg?v=1733836913&width=360",
       item1:"Power Tint Technology",
       item2:"vv",
       item3:"Shade:Pink Gold",
       item4:"cac",
       item5:"cad"
    },
    {
      id:2,
      imageSrc:"https://typsybeauty.com/cdn/shop/files/Bubble-Tea-Revised.jpg?v=1734931545&width=990",
       item1:"Power Tint Technology",
       item2:"vv",
       item3:"Shade:Pink Gold",
       item4:"cac",
       item5:"cad"
    },
    {
      id:3,
      imageSrc:"https://typsybeauty.com/cdn/shop/files/Caramel_071ecfe7-bfcb-4184-b020-bc06bf529dd3.jpg?v=1734009165&width=990",
       item1:"Power Tint Technology",
       item2:"vv",
       item3:"Shade:Pink Gold",
       item4:"cac",
       item5:"cad"
    }
  ]

  return (
    <>
    <div className=" bg-[#fee9e6] p-10 w-full mt-[-1rem]">
       <div className="font-Gupter md:text-6xl text-3xl text-[#551447] font-bold text-center pt-10 ">Hot Right Now</div>

       <div className=" md:flex md:flex-row md:justify-evenly mt-4 pb-2 flex flex-col justify-center items-center md:space-x-1 md:space-y-0 space-y-4">
        
        {
          products.map((products)=>(
            <HomePageProductCard
            key={products.id}
            {...products}
            
            />
          ))
        }
       
       </div>

    </div>
      
    </>
  );
}

export default HomePageProduct;