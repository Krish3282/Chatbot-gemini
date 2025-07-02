import SideBar from './component/Sidebar/SideBar'
import Main from './component/main/Main'
import '../src/config/gemini.js'
import './Context/Context.jsx' 

const App = () => {
  return (
    <>
      <SideBar />
      <Main />
    </>
  )
}

export default App
