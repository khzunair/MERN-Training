import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogHome from './pages/BlogHome';
import BlogDetail from './pages/BlogDetail';
import Navbar from './components/ui/Navbar';
// import { ThemeTest } from './components/theme/ThemeTest';

function App() {


  return (
    <>
    {/* week 3 task */}
      {/* <Todo /> */}
      {/* understanding the call stack */}
      {/* <Test /> */}
      
      <BrowserRouter>
      {/* <ThemeTest /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<BlogHome />} />
        <Route path='/blog/:id' element={<BlogDetail />} />
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
