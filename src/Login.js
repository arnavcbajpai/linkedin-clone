import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [profilePicURL, setProfilePicURL] = useState('')
  const dispatch = useDispatch()

  const register = () => {
    if (!name) return alert('Please enter the full name')
    else if (!email) return alert('Please enter the email')

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePicURL,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePicURL,
              })
            )
          })
      })
      .catch((err) => alert(err))
  }

  const loginToApp = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoUrl,
          })
        )
      })
      .catch((err) => alert(err))
  }

  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input
          value={name}
          type="text"
          placeholder="Full Name(required if registering)"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={profilePicURL}
          type="text"
          placeholder="Profile Picture URL (optional)"
          onChange={(e) => setProfilePicURL(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="EmaiL"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
