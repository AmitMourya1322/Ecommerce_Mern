import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/auth"
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth();
  const logout=()=>{
    setAuth({...auth,user:null,token:''})
    localStorage.removeItem('auth');
    navigate('/login')
  }
  return (
    <>
    <ul className="nav d-flex justify-content-between shadow-sm mb-2">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
      </li>

    
      {!auth?.user ?(
        <>
        <li className="nav-item">
            <NavLink className="nav-link" to="/login"> LOGIN</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">REGISTER</NavLink>
          </li>
        </>
      ):(
        <div className="dropdown">
          <li>
            <a className="nav-link pointer dropdown-toggle" data-bs-toggle="dropdown">{auth?.user?.name}</a>
            <ul className="dropdown-menu">
          <li>
          <li className="nav-item">
            <NavLink className="nav-link" to={`/dashboard/${auth?.user?.role ===1 ?'admin':'user'}`}>Dashboard</NavLink>
          </li>
          </li>

          <li className="nav-item">
        <NavLink onClick={logout} className="nav-link" >LOGOUT</NavLink>
      </li>
          </ul>
          </li>
          
          
        </div>
      ) }
    
      
      
      
     

    </ul>
    </>
  )
}

export default Menu