import React from 'react'
import '../../styles/Header.css'

import DriveLogo from '../../assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';


const index = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={DriveLogo} alt='google_drive'/>
                <span>Drive</span>
            </div>

            <div className='header_searchContainer'>
                <div className='header_searchBar'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search in Drive'/>
                    <ExpandMoreIcon/>
                </div>
            </div>


            <div className='header_icons'>
                <span>
                    <SettingsIcon/>
                    <HelpOutlineIcon/>
                </span>
                
                <AppsIcon/>

                <img src='' alt='User Photo'/>
            </div>
        </div>
    )
}

export default index
