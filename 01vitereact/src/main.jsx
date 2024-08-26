import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
  
//   return(
//     <div>
//       <h2>Custom React</h2>
//     </div>
//   )
// }

// const ReactElement={
//   type:"a",
//   props:{
//     href:"https://google.com",
//     target:'_blank'
//   },
//   children:"click me to visit google"
// }
const anotherElement=(
  <a href="https:google.com">Click here</a>
)
const ReactElement=React.createElement('a',{href:"https:google.com",target:"_blank"},'click me to visit google',anotherElement)

createRoot(document.getElementById('root')).render(
  
  // <MyApp/>
  ReactElement

    
//  console.log(App)
)
