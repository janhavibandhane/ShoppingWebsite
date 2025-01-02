import { FiAlignRight } from "react-icons/fi";
function HomePagesNav() {
  
  return (
    <>
    <div className="navbar bg-[#ca448e] text-white">

        
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
  <div className=" md:space-x-20 md:text-2xl md:block hidden lg:mr-[10rem] mr-[3rem]  font-Gupter">
          <button>Home</button>
          <button>Shop</button>
          <button>About</button>
          <button>Contacts</button>
        </div>
  </div>

       

        {/* mobile view */}
        <div className="md:hidden z-10">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className=" text-3xl text-white drawer-button"
              >
                <FiAlignRight />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
       


        <div className="md:space-x-10 md:text-xl md:block hidden">
          <button className="btn hover:bg-black hover:text-white text-black">
            Sign in
          </button>
          <button className="btn bg-black text-white hover:text-black">
            Sign up
          </button>
        </div>
       </div>
       </div>
       

      
   

    </>
  );
}
export default HomePagesNav;
