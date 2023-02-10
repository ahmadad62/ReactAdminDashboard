import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

export default function Sidebar() {
   const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className='logo'>Admin</span>
                </Link>
            </div>
            <hr className="icon" />
            <div className="center">
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>

                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>User</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                  
                    <li>
                        <StoreIcon className="icon" />
                        <span>Products</span>
                    </li>
                  </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <BarChartIcon className="icon" />
                        <span>State</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <CloudCircleIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <p className='title'>USER</p>

                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        <span>Setting</span>
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            </div>
        </div>
    )
}
