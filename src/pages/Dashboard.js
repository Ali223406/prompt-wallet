import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import PromptCard from '../components/prompt/promptCard' ; 



const Dashboard = () => {
    const navigate = useNavigate(); 
    const [filter, setFilter] = useState('')


    return(
        <div >
           <h1>
            General conditions  of use 
           </h1>
           <section >
            <h3> functions </h3>
            <p> Prompt Wallet is an aplication that allows users to store, manage, and shere AI prompts securely and efficaiantly</p>
           </section>

           <section >
            <h3> User account </h3>
            </section>
            <h3> data gestion </h3>
            <p> <strong> for the gestion of your data, your data are stored in locly on your device</strong> </p>

        </div>
    );
};
export default Dashboard;