// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import useCurrencyInfo from './hooks/useCurrencyInfo'
// import Inputbox from './components/Inputbox'

// function App() {
//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState('USD')
//   const [to, setTo] = useState('EUR')
//   const [convertedAmount, setConvertedAmount] = useState(0)
//   const currencyInfo = useCurrencyInfo(from)
//   const options = Object.keys(currencyInfo)

//   const swapCurrencies = () => {
//     const tempFrom = from
//     const tempAmount = amount
//     setFrom(to)
//     setTo(tempFrom)
//     setAmount(convertedAmount)
//     setConvertedAmount(tempAmount)
//   }

//   const convert = () => {
//     if (amount <= 0) {
//       setConvertedAmount(0)
//       return
//     }
//     const rate = currencyInfo[to]
//     const converted = amount * rate
//     setConvertedAmount(converted)
//   }

//   return (
//     <>
//       <div
//         className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//         }}
//       >
//         <div className="w-full">
//           <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault()
//                 convert()
//               }}
//             >
//               <div className="w-full mb-1">
//                 <Inputbox
//                   label="From"
//                   amount={amount}
//                   currencyOptions={options}
//                   onCurrencyChange={(currency) => setFrom(currency)}
//                   selectCurrency={from}
//                   onAmountChange={(amount) => setAmount(amount)}
//                 />
//               </div>
//               <div className="relative w-full h-0.5">
//                 <button
//                   type="button"
//                   className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                   onClick={swapCurrencies}
//                 >
//                   swap
//                 </button>
//               </div>
//               <div className="w-full mt-1 mb-4">
//                 <Inputbox
//                   label="To"
//                   amount={convertedAmount}
//                   currencyOptions={options}
//                   onCurrencyChange={(currency) => setTo(currency)}
//                   selectCurrency={to}
//                   amountDisable
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//               >
//                 Convert {from.toUpperCase()} to {to.toUpperCase()}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

// import { useState } from 'react';
// import './App.css';
// import Card from './Card';

// function App() {
//   const teamData = [
//     { image: '../public/team-person-1.png', name: 'Tashi Namora', role: 'Site Engineer' },
//     { image: '../public/team-person-2.png', name: 'Larry Ludson', role: 'Civil Engineer' },
//     { image: '../public/team-person-3.png', name: 'Dwight Schrute', role: 'Site Engineer' },
//     { image: '../public/team-person-4.png', name: 'Jim Harper', role: 'Regional Manager' },
//   ];

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-10">
//       <div className="text-center mb-10">
//         <h3 className="text-orange-500 font-bold text-lg mb-2">Our Team</h3>
//         <h2 className="text-2xl font-semibold">Meet Our Team of Professionals</h2>
//         <p className="max-w-xl mx-auto text-sm text-gray-700 mt-4">
//           Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque.
//         </p>
//       </div>
//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
//         {teamData.map((member, idx) => (
//           <Card key={idx} image={member.image} name={member.name} role={member.role} />
//         ))}
//       </div>
//     </section>
//   );
// }


import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

   <Routes>
      <Route path="/" element={<Contact Us />}>
        <Route index element={<ContactUs />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  return (
    <div className="relative z-0 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative z-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
