import React from 'react'
import { useAuth } from "../contexts/Auth";

const Header = () => {
  const { logout } = useAuth();
  return (
    <div className="flex justify-around header_component">
        <p className=''>
            Cookie Stand Admin
        </p>
        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Header