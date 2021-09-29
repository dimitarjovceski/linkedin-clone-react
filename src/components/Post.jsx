import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import { forwardRef } from 'react'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {

    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltIcon} title='Like' color='#0077B5' />
                <InputOption Icon={CommentIcon} title='Comment' color='0077B5' />
                <InputOption Icon={ShareIcon} title='Share' color='0077B5' />
                <InputOption Icon={SendIcon} title='Send' color='0077B5' />

            </div>

        </div>
    )
})
export default Post
