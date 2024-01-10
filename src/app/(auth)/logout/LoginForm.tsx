'use client'
import { useAuth } from "@context/auth"

const LogoutForm = () => {
  const { logout} = useAuth()
  
  return (
    <>
      <button className="p-2 bg-orange-200 text-gray-700" onClick={logout}>Log out</button>
    </>
  )
}

export default LogoutForm