import Home from './Pages/Home'
import NavBar from './Components/Navbar'
import CalendarPage from './Pages/Calendar'
import About from './Pages/About'
import { Routes, Route } from'react-router'
import { BrowserRouter as BR} from 'react-router-dom'



function App() {

    return (
        <div className="App">
          <BR>
            <NavBar />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/calendar" element={<CalendarPage/>}/>
                  <Route path="/about" element={<About/>}/>
              </Routes>
          </BR>
        </div>
    )
}

export default App;