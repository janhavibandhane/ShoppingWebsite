import HomePagesFooter from "./component/HomePages/HomePagesFooter";
import HomePagesNav from "./component/HomePages/HomePagesNav"
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <HomePagesNav></HomePagesNav>
        <Outlet></Outlet>
        <HomePagesFooter></HomePagesFooter>
        </>
    )
}
export default Layout