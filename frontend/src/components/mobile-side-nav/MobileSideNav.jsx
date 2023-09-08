import React from 'react';
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./mobile-side-nav.scss"

const MobileSideNav = () => {
    return (
        <div className='mobile-side-nav'>
            <nav className="mobile-nav">
                <ul className="mobile-nav--list">
                    <li>

                        <NavLink to="/bookings" className={({ isActive }) => isActive ? "active" : ""}>
                            <Icon icon="ion:calendar-outline" className="medium-icon" />
                            <span>Bookings</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/bookables" className={({ isActive }) => isActive ? "active" : ""}>
                            <Icon icon="lucide:door-open" className="medium-icon" />
                            <span>Bookables</span>
                        </NavLink>
                    </li>
                    <li>

                        <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
                            <Icon icon="clarity:users-solid" className="medium-icon" />
                            <span>Users</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileSideNav