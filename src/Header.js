import React from 'react'
import { useDispatch } from 'react-redux'
import {
  Search as SearchIcon,
  Home as HomeIcon,
  SupervisorAccount as SupervisorAccountIcon,
  BusinessCenter as BusinessCenterIcon,
  Chat as ChatIcon,
  Notifications as NotificationIcon,
} from '@material-ui/icons'
import './Header.css'
import HeaderOption from './HeaderOption'
import { auth } from './firebase'
import { logout } from './features/userSlice'

const Header = () => {
  const dispatch = useDispatch()

  const logOutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="LinkedIn_Icon"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notifications" />
        <HeaderOption avatar title="Me" onClick={logOutOfApp} />
      </div>
    </div>
  )
}

export default Header
