import '../src/index.css';
import '../src/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './componentsRoot/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Index from './pages/Index';
import IndexModules from './pages/IndexModules';
import IndexCourses from './pages/IndexCourses';
import IndexLogin from './pages/IndexLogin';
import IndexLogout from './pages/IndexLogout';

import Login from './components/Login';

const ROUTER = createBrowserRouter([
  // {path: '/', element:<IndexLogin/>},
  
  {path: '/', 
    
    element:<RootLayout/>, 
    errorElement: <ErrorPage/>, 
    id:'root', 
    loader: () => {
      return { login: localStorage.getItem('token') ? true : false};},
  children: [
  {path: '/', element:<Index/>},
  //{path: '/180', element: <Index180/>},
  //{path: '/admin', element:<IndexAdmin/>},
  //{path: '/teacher', element: <IndexTeacher/>},
  //{path: '/user', element: <IndexUser/>},
  {path: "/courses", element: <IndexCourses/>},
  {path: "/courses/modules/:id", element: <IndexModules/>},
  
]},
  {path: '*', element: <ErrorPage /> },
  {path: '/login', element:<IndexLogin/>},
  {path: '/logout', element:<IndexLogout/>},
])

function App() {
  return (<RouterProvider router={ROUTER}/> )
}

export default App
