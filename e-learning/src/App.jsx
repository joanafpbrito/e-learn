
import './App.css'
import RootLayout from './componentsRoot/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Index from './pages/Index';
import IndexModules from './pages/IndexModules';
import IndexCourses from './pages/IndexCourses';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
])

function App() {
  return (<RouterProvider router={ROUTER}/> )
}

export default App
