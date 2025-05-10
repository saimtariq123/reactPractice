import { useCallback, useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numAllowed, setNumAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const passRef= useRef(null);
  const passGenerator= useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numAllowed) {
      chars += '0123456789';
    }
    if (specialCharAllowed) {
      chars += '@#$%^&*()_+[]{}|;:,.<>?';
    }
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  } , [numAllowed, specialCharAllowed, length , setPassword]);
 useEffect(() => {
    passGenerator();
  }, [length, numAllowed, specialCharAllowed, passGenerator]);

  const copyPass= () => {
    window.navigator.clipboard.writeText(password)
    passRef.current.select();
    passRef.current.setSelectionRange(0, 99999);}
  return (
    <>
      <div className='m-10  py-1 px-4 w-full max-w-md mx-auto shadow-md rounded-lg overflow-hidden mb-4 bg-black text-orange-500 '>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-2 px-4 bg-white text-black'
        placeholder='password'
        readOnly
        ref={passRef}/>
        <button className='cursor-pointer' 
        onClick={copyPass} >copy</button>


</div>
    <div></div>
    <div>
      <input type="range" 
      min={8}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}/>
      <label >length: {length}</label>
    </div>
    <div>
      <input type="checkbox"
      defaultChecked= {numAllowed}
      id="inputNumber"
      onChange={()=>{setNumAllowed((prev)=>!prev);}}/>
      <label htmlFor='numberInput'>Numbers</label>
    </div>
    <div>
      <input type="checkbox"
      defaultChecked= {specialCharAllowed}
      id="inputChar"
      onChange={()=>{setSpecialCharAllowed((prev)=>!prev);}}/>
            <label htmlFor='charInput'>Characters</label>

      
    </div>
      </div>
    </>
  )
}

export default App
