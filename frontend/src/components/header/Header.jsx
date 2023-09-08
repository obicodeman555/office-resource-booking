import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react"
import UserPicker from "../user-picker/UserPicker";
import MobileSideNav from "../mobile-side-nav/MobileSideNav";
import "./header.scss";

const Header = () => {
    const [showMobileSideNav, setShowSideNav] = useState(false)
    return (
        <header className="header">
            <div className="container header-content">
                <nav className="header-navs">
                    <ul className="header-navs--list">
                        <li>

                            <NavLink to="/bookings" className={({ isActive }) => isActive ? "active" : ""}>
                                <Icon icon="ion:calendar-outline" className="small-icon" />
                                <span>Bookings</span>
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to="/bookables" className={({ isActive }) => isActive ? "active" : ""}>
                                <Icon icon="lucide:door-open" className="small-icon" />
                                <span>Bookables</span>
                            </NavLink>
                        </li>
                        <li>

                            <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
                                <Icon icon="clarity:users-solid" className="small-icon" />
                                <span>Users</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="header-right">
                    <UserPicker />
                    <button type="button" className="mobile-nav--toggler show-on-mobile" onClick={() => setShowSideNav(prev => !prev)}>
                        <Icon icon="mdi:hamburger-menu-back" className="medium-icon" />
                    </button>
                    {
                        showMobileSideNav ? <MobileSideNav /> : null
                    }
                </div>
            </div>

        </header>
    )
}

export default Header