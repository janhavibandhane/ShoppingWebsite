import ProductPagesLayoutCompo from "../ProductsReuseableComponents/ProductPagesLayoutCompo";
import HomePageProductCard from "../HomePagesReuseableComponents/HomePageProductCard";
function ProductForEyes(){
    return(
        <>
        <ProductPagesLayoutCompo
        Item1={"Eyes Products"}
        Item2={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Curling-1st.jpg?v=1731318352&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Eye-Lashes-Brunch-Basics.jpg?v=1735825862&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1st_89d1c340-3d1d-45ae-a45b-699755952ae3.jpg?v=1731322603&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
      </>}
       Item3={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Twinkling_33301583-b34b-40ab-8c34-9c82959745db.jpg?v=1734087912&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1All_c5e855db-4c1f-46eb-a515-a76b2e485cbf.jpg?v=1729597082&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1_78445788-e95c-4db9-87c9-118227bd8930.jpg?v=1715693472&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
      </>}
        ></ProductPagesLayoutCompo>
        </>
    )
}
export default ProductForEyes