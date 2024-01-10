'use client'
import { useAuth } from "@context/auth"
import Link from "next/link"

const NotLogin = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username: </label>
        <input type='text' name='username' id='username' required/><br />
        <label htmlFor="password">Password: </label>
        <input type='password' name='password' id='password' required/><br />
        <button type='submit'>GOOOO</button>
      </form>    
    </>
  )
}

const Login = () => {
  const {userInfo} = useAuth()
  return (
  <>
    {
      <div>
        <p>Hi {userInfo.username}</p>

        <Link href={'/logout'}>
          <button className="bg-gray-500 text-white p-2 rounded">Log out</button>
        </Link>
      </div>
    }
  </>
  )
}

const LoginForm = () => {
  const {isLogin} = useAuth()

  return (
    isLogin ? <Login /> : <NotLogin />
  )
}

export default LoginForm