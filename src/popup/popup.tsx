import React from "react";
import './popup.css';
import {
    CarFront,
    User,
    LogIn
} from "lucide-react";
import Sidebar, {SidebarItem} from "./components/Sidebar";
import {Routes, Route} from "react-router-dom";
import Car from "./pages/Car";
import Client from "./pages/Client";
import Bank from "./pages/Bank";
import Help from "./pages/Help";
import Form from "./pages/Form";
import NewCar from "./pages/NewCar";


const Popup = () => {

    return (
        <main className="App">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Help />} />
                <Route path="bank" element={<Bank />}/>
                <Route path="car" element={<Car />}/>
                <Route path="client" element={<Client />}/>
                <Route path="form" element={<Form />}/>
                <Route path="new-car" element={<NewCar />}/>
            </Routes>
        </main>
    )
};

export default Popup;