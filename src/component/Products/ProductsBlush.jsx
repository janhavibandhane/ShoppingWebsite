import ProductPagesLayoutCompo from "../ProductsReuseableComponents/ProductPagesLayoutCompo";
import HomePageProductCard from "../HomePagesReuseableComponents/HomePageProductCard";
function ProductsBlush(){
    return(
        <>
        <ProductPagesLayoutCompo
        Item1={"Face"}
        Item2={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Baileys_9ffe09e0-6315-4903-95be-31007188588b.jpg?v=1735825064&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Coral-Kiss_330a6a87-6942-4a20-bd86-f82fb2b25188.jpg?v=1735895324&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/Plum-Pie_93271a68-4b43-48df-8639-4aa949b246f5.jpg?v=1733836913&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
      </>}
       Item3={<>
        <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/DF_4c7ae1ef-e476-4753-953f-3b9d515e1752.jpg?v=1735894306&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/VanillaLatte1.png?v=1685434396&width=360"}
       item1={"Power Tint Technology"}
       item2={"vv"}
       item3={"Shade:Pink Gold"}
       item4={"cac"}
       item5={"cad"}
       />
       <HomePageProductCard 
       imageSrc={"https://typsybeauty.com/cdn/shop/files/1_3460f32e-e0c0-4895-ab32-64e7d2717901.png?v=1685431122&width=360"}
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
export default ProductsBlush