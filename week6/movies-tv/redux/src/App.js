import React from "react"
import { Switch, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import TV from './Components/Tv'

function App() {
  return (
    <div>
      <Navbar />      
      <Switch>
      <Route 
          path="/movies"
          render={() => <Movies />}
        />
        <Route 
          path="/tv"
          render={() => <TV />}
        />
      </Switch>
    </div>
  
  )
}
        

export default App