import ProductPagesLayoutCompo from "../ProductsReuseableComponents/ProductPagesLayoutCompo";
import HomePageProductCard from "../HomePagesReuseableComponents/HomePageProductCard";
function ProductBrushes(){
    return(
        <>
        <ProductPagesLayoutCompo
        Item1={"Accessories"}
        Item2={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1st_0b57921a-96be-4a89-b58e-0b0c851613f1.jpg?v=1731324082&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1ST_feb1241b-c0c9-420b-b3cb-e2c180098d06.jpg?v=1731324769&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1ST_dbd1c136-5be1-44a6-8673-76ddb455861b.jpg?v=1731321118&width=360"}
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
export default ProductBrushes