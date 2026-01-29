import React from "react";
import { Outlet, useNavigate } from "react-router";

const BackButtonLayout = () => {
    const navigate = useNavigate()
    const navBack = () => {
        navigate(-1)
    }
    return(
        <div>
         <button onClick={navBack}> Retour </button> 
             <Outlet/>
        </div>
    )
}
export default BackButtonLayout;