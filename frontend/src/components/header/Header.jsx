import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"
import UserPicker from "../user-picker/UserPicker";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>

                        <Link to="/bookings">
                            <Icon icon="ion:calendar-outline" />
                            <span>Bookings</span>
                        </Link>
                    </li>
                    <li>

                        <Link to="/bookables">
                            <Icon icon="lucide:door-open" />
                            <span>Bookables</span>
                        </Link>
                    </li>
                    <li>

                        <Link to="/users">
                            <Icon icon="clarity:users-solid" />
                            <span>Users</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <UserPicker />
        </header>
    )
}

export default Header