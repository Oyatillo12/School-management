
import { useContext } from 'react'
import './App.css'
import { Context } from './context/AuthContext'
import DashboardRoute from './routes/DashboardRoute'
import EnterRoute from './routes/EnterRoute'

function App() {
   
  const {token} = useContext(Context)

  if(token){
    return <DashboardRoute/>
  }
  else{
    return <EnterRoute/>
  }

 }

export default App
