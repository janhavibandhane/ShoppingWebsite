import { FiAlignRight } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
function HomePagesNav() {
  return (
    <>
      <div className="navbar sticky top-0 z-50  bg-[#e24298] text-white">
        {/* Logo */}
        <div className="flex-1">
            <img src="https://typsybeauty.com/cdn/shop/files/new-logo-white-st_3_ba2111eb-d044-4682-ab21-3724d4106172.png?v=1723613891&width=210" className="md:w-auto w-[9rem]"></img>
        </div>

        {/* Options */}
        <div className="flex-none">
          <div className=" md:text-2xl md:block hidden lg:mr-[2rem] mr-[3rem]  font-Gupter">
            <div className=" flex  md:space-x-16">
            <Link to={"/"}><button>Home</button></Link>
            <button>Shop</button>
            <button>About</button>
            <button>Contacts</button>
            <div className=" space-x-5">
            <Link to={'/AddedItem'}><button className="mt-1"><FaShoppingBag /></button></Link>
            <button className="mt-1"><IoMdPerson /></button>
            </div>
            </div>
          </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden z-10 ">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex space-x-2">

            <div className="">
            <Link to={'/AddedItem'}><button className="mt-1 text-xl"><FaShoppingBag /></button></Link>
            </div>
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" text-3xl text-white drawer-button"
              >
                <FiAlignRight />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu font-Gupter text-2xl  min-h-full w-80 p-4 text-[#551447] bg-[#fee9e6]">
                {/* Sidebar content here */}
                <li>
                <Link to={"/"}><button>Home</button></Link>
                </li>
                <li>
                  <a>Shop</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
export default HomePagesNav;
