import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl">
            <button onClick={()=>setColor("red")} className="outline-none px-6 py-3 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}></button>
            <button onClick={()=>setColor("green")} className="outline-none px-6 py-3 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}></button>

          <button onClick={()=>setColor("blue")} className="outline-none px-6 py-3 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}></button>

          <button onClick={()=>setColor("black")} className="outline-none px-6 py-3 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}></button>
       </div>
      </div>
    </div>
  )
}

export default App