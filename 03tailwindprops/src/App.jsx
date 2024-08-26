
import './App.css'
import Card from './components/Card'
function App() {
  let myObj={
    name:"Qusai",
    Age:21
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-lg mb-3">Tailwind Test</h1>
      <Card username="chai" someobj={myObj}/>
      <Card username="Qusai" btnText="viewHere"/>
    </>
  )
}

export default App
