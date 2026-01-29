import React from "react";
import { Outlet } from "react-router";
import NavMenu from "./NavMenu";
const NavMenuLayout = () => {
    return(
        <div>
            <NavMenu/>
             <Outlet/>
        </div>
    )
}
export default NavMenuLayout;