import ProductPagesLayoutCompo from "../ProductsReuseableComponents/ProductPagesLayoutCompo";
import HomePageProductCard from "../HomePagesReuseableComponents/HomePageProductCard";

function ProductsLipstick(){
    return(
        <>
        <ProductPagesLayoutCompo
        Item1={"Lipsticks"}
        Item2={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Strawberry_95cd3724-62d0-4826-b7db-425125359948.webp?v=1733304519&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/CHERRY-BLOSSOM_4ff8fbe6-593b-44d9-864b-27965e6638ce.jpg?v=1731321357&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Caramel_071ecfe7-bfcb-4184-b020-bc06bf529dd3.jpg?v=1734009165&width=990"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
      </>}
       Item3={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Lip-Oil-OG.jpg?v=1735826459&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Bundle-Image.jpg?v=1731062614&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/4TH.jpg?v=1728650617&width=360"}
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
export default ProductsLipstick;