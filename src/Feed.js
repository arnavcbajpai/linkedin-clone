import React, { useState, useEffect } from 'react'
import FlipMove from 'react-flip-move'
import firebase from 'firebase'
import {
  Create as CreateIcon,
  Image as ImageIcon,
  Subscriptions as SubscriptionsIcon,
  Event as EventNoteIcon,
  CalendarViewDay as CalendarViewDayIcon,
} from '@material-ui/icons'
import InputOptions from './InputOptions'
import Posts from './Posts'
import './Feed.css'
import { db } from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const user = useSelector(selectUser)

  const sendPost = (e) => {
    e.preventDefault()
    console.log('Firing')
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('')
  }

  useEffect(() => {
    db.collection('posts')
      .orderBy('timeStamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
        console.log(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      })
  }, [])

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7Fc15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed
