import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Sidebar = () => {
  return (
    <div className="sidebar">
        
        <div className="top">
            <span className="logo">Admin</span>
        </div>

        <hr />

        <div className="center">
           <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>

                <p className="title">LISTS</p>
                <li>
                    <Person2OutlinedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <ViewStreamOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningOutlinedIcon className='icon'/>
                    <span>Delivery</span>
                </li>

                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <span>Notifications</span>
                </li>

                <p className="title">SERVICES</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyAltOutlinedIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsOutlinedIcon className='icon'/>
                    <span>Settings</span>
                </li>

                <p className="title">USER</p>
                <li>
                    <AccountBoxOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
           </ul>
        </div>
        
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    
    </div>
  )
}

export default Sidebar