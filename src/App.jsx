import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navabr/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json()
}

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true)
  const [avaiableBalance, setAvailableBalance] = useState(600000)


  return (

    <>
      <Navbar avaiableBalance={avaiableBalance}></Navbar>
      <div className='flex justify-between max-w-[1200px] mx-auto mt-4 items-center font-bold p-2'>
        <div>
          <h1>Available Players</h1>
        </div>
        <div>
          <button onClick={() => setToggle(true)} className={`${toggle === true ? "bg-[#E7FE29]" : ""} py-2 px-3 rounded-l-2xl`}>Available</button>
          <button onClick={() => setToggle(false)} className={`${toggle === false ? "bg-[#E7FE29]" : ""} py-2 px-3 rounded-r-2xl`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true ? <Suspense fallback={<h3><span
          className="loading loading-spinner loading-xl"></span></h3>
        }>
          <AvailablePlayers avaiableBalance={avaiableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}>  </AvailablePlayers>
        </Suspense> : <SelectedPlayers></SelectedPlayers>
      }


    </>
  )
}

export default App
