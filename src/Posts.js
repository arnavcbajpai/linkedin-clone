import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
} from '@material-ui/icons'
import InputOptions from './InputOptions'
import './Posts.css'

const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
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
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
        <InputOptions Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  )
})

export default Posts
