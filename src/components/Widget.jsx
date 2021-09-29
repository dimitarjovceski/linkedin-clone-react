import { Avatar } from '@material-ui/core';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import React from 'react'
import './Widget.css'

function Widgets({ avatar, fullname, description }) {

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h3>Add to your feed</h3>
                <FiberNewIcon />
            </div>

            <div className="widgets__section">
                {avatar && (
                    <Avatar src={avatar} className='widget__avatar' />
                )}
                <h4>{fullname}</h4>
                <p>{description}</p>
            </div>
            <button>Follow</button>
        </div>
    )
}

export default Widgets
