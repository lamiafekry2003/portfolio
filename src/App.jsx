
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Hero from './Components/Hero/Hero'
import Layout from './Components/Layout/Layout'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { path: '/', element: <Hero /> }, 
        { path: 'about', element: <About /> },
        { path: 'skills', element: <Skills /> },
        { path: 'experience', element: <Experience /> },
        { path: 'work', element: <Work /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;

 
}

export default App
