
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Menu from './components/nav/Menu';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/user/Dashboard';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  const PageNotFound = ()=>{
    return(
      <><h1>404Error</h1></>
    )
  }
  return (
    <BrowserRouter>
    <Menu/>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
      <Route path='/dashboard' element={<PrivateRoute/>}>
      <Route path='user' element={<Dashboard/>}/>

  
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
