import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const handleSingOut = () => {
    logOut()
      .then(() => { console.log('logout'); })
      .catch(err => {
        console.error(err)
      })

  }
  return (
    <div className="navbar bg-base-100 px-10">
      <Link to="/" className="btn btn-ghost normal-case text-2xl">UI</Link>
      <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
      <Link to="/profile" className="btn btn-ghost normal-case text-xl">Profile</Link>
      <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
      <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
      {user?.email && <span>Welcome, {user.email}</span>}
      {
        user?.email ?
          <button onClick={handleSingOut} className='btn btn-sm'>Sing Out</button>
          : <Link to='/login' >Login</Link>
      }
    </div>
  );
};

export default Header;