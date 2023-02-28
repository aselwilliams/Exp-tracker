import React from 'react';
import classes from './Navbar.module.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useGlobalContext} from '../../store/globalContext';

const Navbar = () => {
    const {darkMode, setDarkMode} =useGlobalContext()
  return (
    <div className={classes.navbar}>
        <div className={classes.wrapper}>
            <div className={classes.search}>
                <input type="text" placeholder='Search ...' />
                <SearchOutlinedIcon />
            </div>
            <div className={classes.items} >
            
                <div className={classes.item} onClick={()=>setDarkMode(!darkMode)}>
                    {darkMode ? <LightModeIcon className={classes.icon}/> : <DarkModeOutlinedIcon className={classes.icon}/>
                    }
                </div>
                <div className={classes.item}>
                    <NotificationsNoneOutlinedIcon className={classes.icon}/>
                    <div className={classes.counter}>1</div>
                </div>
                <div className={classes.item}>
                    <ChatBubbleOutlineOutlinedIcon className={classes.icon}/>
                    <div className={classes.counter}>2</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar