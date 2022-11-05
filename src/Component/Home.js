import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <div>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link to='/HomeData' >OverView</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/clothes'>Clothes</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/mobiles' >Mobiles</Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/jewellery' >Jewellery</Link>
                    </li>
                </ul>
            </div>
          
            <Outlet></Outlet>

        </div>
    )
}
export default Home;