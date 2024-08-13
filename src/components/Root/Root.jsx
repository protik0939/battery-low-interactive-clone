import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Options from "../Options/Options";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Options></Options>
            <Navbar></Navbar>
        </div>
    );
};

export default Root;