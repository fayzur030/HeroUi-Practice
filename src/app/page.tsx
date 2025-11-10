'use client'
import Myaccordion from './components/Accordion'
import Myalert from './components/Alert'
import Myautocomplete from './components/Autocomplete'
import Avatars from './components/Avatar'
import NavBar from './components/Navbar'

export default function Home() {
  return (
    <div className=''>
      <NavBar />
      <Myaccordion />
      <Myautocomplete />
      <Myalert />
      <div className="max-w-7xl mx-auto justify-center items-center">
      <Avatars/>
      </div>
    </div>

  )
}
