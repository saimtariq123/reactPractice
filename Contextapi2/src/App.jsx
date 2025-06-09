  import { useEffect, useState } from 'react'

  import './App.css'
  import { ThemeContextProvider } from './context/Theme';
  import Themebutton from './components/Themebutton'
  import Card from './components/Card'

  function App() {
    const [themeMode, setThemeMode] = useState('light');
    const darkTheme = () => setThemeMode('dark');
    const lightTheme = () => setThemeMode('light');

    useEffect(() => {
      document.querySelector('HTML').classList
        .remove('dark', 'light')
         document.querySelector('HTML').classList.add(themeMode);
    }, [themeMode]);
    return (
      <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>

        <div className="bg-[#172842] min-h-screen py-8">
                  <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                      <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                      <div className="mb-4">
                        
                          <Themebutton/>
                      </div>
                      <div className="flex flex-wrap gap-y-3">
                        
                          <Card/>

                      </div>
                  </div>
              </div>
      </ThemeContextProvider>
    )
  }

  export default App
