import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

function HomePagesFooter() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setActiveQuestion((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <footer className="footer bg-[#ffd1d1] flex flex-col justify-center items-center p-10 text-[#551447]">
        {/* FAQs Section */}
        <div className="hero bg-[#fee9e6] rounded-xl shadow-xl p-6">
          <div className="hero-content flex flex-col items-start lg:mr-[40rem]">
            <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h1>
            <div className="space-y-3 text-md text-left">
              <div>
                <div
                  onClick={() => toggleAnswer(1)}
                  className="cursor-pointer "
                >
                  Which Makeup And Beauty Products Are Most Important?
                </div>
                {activeQuestion === 1 && <div className="pl-4">The essential makeup & beauty products include foundation, concealer, mascara, lipstick, eyeliner, and eyebrow products. Primer helps makeup last longer while setting spray locks it in place.</div>}
              </div>
              <div>
                <div
                  onClick={() => toggleAnswer(2)}
                  className="cursor-pointer"
                >
                  What Are The Main Rules Of Makeup?
                </div>
                {activeQuestion === 2 && <div className="pl-4">Always start with a clean and moisturised face, choosing shades that enhance your natural features. Blend well to achieve a natural look, and don't forget to remove makeup before bed for healthy skin.</div>}
              </div>
              <div>
                <div
                  onClick={() => toggleAnswer(3)}
                  className="cursor-pointer"
                >
                  How Many Categories Of Makeup Are There?
                </div>
                {activeQuestion === 3 && <div className="pl-4">There are generally three categories of makeup – face, eyes, and lips. Face makeup includes foundation, concealer, blush, and bronzer. Eye makeup consists of eyeshadow, eyeliner, mascara, and brow products.</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <img
            src="https://typsybeauty.com/cdn/shop/files/Eyes_2_ccaf306d-5286-40d1-a352-da0e6a2701b4.png?v=1730957296"
            className="md:w-36 md:h-36 w-20 h-20"
            alt="Eyes"
          />
          <img
            src="https://typsybeauty.com/cdn/shop/files/Group_70_1_1.png?v=1730957384"
            className="md:w-36 md:h-36 w-20 h-20"
            alt="Group 70"
          />
          <img
            src="https://typsybeauty.com/cdn/shop/files/Lips_264393ef-9c23-4b00-afaa-676b2a8d7ad5.png?v=1730957298"
            className="md:w-36 md:h-36 w-20 h-20"
            alt="Lips"
          />
          <img
            src="https://typsybeauty.com/cdn/shop/files/Value-sets_edeb2e64-7853-449a-84e4-d5cbe521816d.png?v=1730957297"
            className="md:w-36 md:h-36 w-20 h-20"
            alt="Value Sets"
          />
        </div>

        {/* Social Section */}
        <div className="text-center flex flex-col items-center justify-center mt-8">
          <div className="text-2xl font-Gupter">Let's get social</div>
          <div className="text-lg">Stay Connected for All the Inside Scoop</div>
          <div className="flex justify-center gap-6 text-pink-500 mt-4">
            <TiSocialFacebook className="text-4xl" />
            <FaInstagram className="text-4xl" />
            <IoMdMail className="text-4xl" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePagesFooter;
