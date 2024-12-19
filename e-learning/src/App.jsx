
import './App.css'
import RootLayout from './componentsRoot/RootLAyout';
import ErrorPage from './pages/ErrorPage';
import Index180 from './pages/Index180';
import IndexAdmin from './pages/IndexAdmin';
import IndexLogin from './pages/IndexLogin'
import IndexTeacher from './pages/indexTeacher';
import IndexUser from './pages/IndexUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 


const ROUTER = createBrowserRouter([
  {path: '/', element:<IndexLogin/>},
  {path: '/', 
    
    element:<RootLayout/>, 
    errorElement: <ErrorPage/>, 
    id:'root', 
    loader: () => {
      return { login: localStorage.getItem('token') ? true : false};},
  children: [
  {path: '/180', element: <Index180/>},
  {path: '/admin', element:<IndexAdmin/>},
  {path: '/teacher', element: <IndexTeacher/>},
  {path: '/user', element: <IndexUser/>},
  
]},
])
  
      
  

function App() {
 

  return (<RouterProvider router={ROUTER}/> )
}

export default App
