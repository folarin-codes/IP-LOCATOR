import { Component } from 'react'
import Home from './components/Home/Home.component'
import { ApiProvider } from './context/api.context'

class App extends Component{
  render() {
    return (
      <ApiProvider>
        <Home/>
      </ApiProvider>
    )
  }
}

export default App