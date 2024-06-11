
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Parent from './Component/Parent'


function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
     <Route>
       <Route path='/' element = {<Parent/>}/>
     </Route>
    )
  )

  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
