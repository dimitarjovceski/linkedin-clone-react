import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import './HeaderOption.css'

function HeaderOption({ Icon, title, avatar, onClick }) {

    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='header__option'>
            {Icon && <Icon className="header__option_icon" />}
            {avatar && (
                <Avatar className="header__option_icon">{user?.email[0]}</Avatar>
            )}
            <h3 className="header__option_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
