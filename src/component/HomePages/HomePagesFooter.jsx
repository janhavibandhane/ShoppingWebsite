import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
function HomePagesFooter(){
    return(
        <>
        <footer className="hero footer bg-pink-100 flex flex-col justify-center items-center p-10 text-[#551447]">
            <div className=" flex justify-center items-center ">
                <img src="https://typsybeauty.com/cdn/shop/files/Eyes_2_ccaf306d-5286-40d1-a352-da0e6a2701b4.png?v=1730957296" className="md:w-36 md:h-36 w-20 h-20 "></img>
                <img src="https://typsybeauty.com/cdn/shop/files/Group_70_1_1.png?v=1730957384" className="md:w-36 md:h-36 w-20 h-20"></img>
                <img src="https://typsybeauty.com/cdn/shop/files/Lips_264393ef-9c23-4b00-afaa-676b2a8d7ad5.png?v=1730957298" className="md:w-36 md:h-36 w-20 h-20"></img>
                <img src="https://typsybeauty.com/cdn/shop/files/Value-sets_edeb2e64-7853-449a-84e4-d5cbe521816d.png?v=1730957297" className="md:w-36 md:h-36 w-20 h-20"></img>
            </div>
            <hr></hr>
            <div className="text-2xl font-Gupter ">Let's get social</div>
            <div className="text-lg">Stay Connected for All the Inside Scoop</div>
            <div className=" text-pink-500 flex">
                <div><TiSocialFacebook className=" text-5xl"/></div>
                <div><FaInstagram className=" text-4xl mt-2"/></div>
                <div><IoMdMail className=" text-4xl mt-2"/></div>
                <div></div>
            </div>

        </footer>
        </>
    )
}
export default HomePagesFooter;