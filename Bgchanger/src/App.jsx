import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
          <div className=' flex shadow-lg flex-wrap rounded-xl px-2 py-2 bg-white justify-center gap-3'>
            <button onClick={()=>setColor("red")} className='px-4 rounded-full shadow-lg '
            style={{backgroundColor:"red"}}>red</button>

<button onClick={()=>setColor("green")} className='px-4 rounded-full shadow-lg '
            style={{backgroundColor:"green"}}>green</button>

<button onClick={()=>setColor("black")} className='px-4 rounded-full shadow-lg text-white '
            style={{backgroundColor:"black"}}>black</button>

<button onClick={()=>setColor("pink")} className='px-4 rounded-full shadow-lg '
            style={{backgroundColor:"pink"}}>pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
