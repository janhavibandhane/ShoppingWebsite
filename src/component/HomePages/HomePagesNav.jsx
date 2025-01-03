import { FiAlignRight } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
function HomePagesNav() {
  
  return (
    <>
    <div className="navbar bg-[#ca448e] text-[#551447]">

        
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
  <div className=" md:space-x-16 md:text-2xl md:block hidden lg:mr-[2rem] mr-[3rem]  font-Gupter font-semibold">
          <button>Home</button>
          <button>Shop</button>
          <button>About</button>
          <button>Contacts</button>
          <button className="btn text-xl text-[#551447]">Login</button>
        </div>
        
  </div>

       

        {/* mobile view */}
        <div className="md:hidden z-10 ">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" text-3xl text-[#551447] drawer-button"
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
              <ul className="menu font-Gupter text-2xl  min-h-full w-80 p-4 text-[#551447] bg-pink-100">
                {/* Sidebar content here */}
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
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
