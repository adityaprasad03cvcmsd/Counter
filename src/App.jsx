import './App.css'
import { Counter } from './components/counter'
import { CounterValue } from "./components/counterValue"
import {SavingData} from "./components/savingdata"
function App() {  
  return (
    <div className="App">
      <div className='container'>
        <SavingData/>
        <Counter />
        <CounterValue/>
      </div>
     
    </div>
  )
}

export default App
