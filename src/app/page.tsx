'use client'
import Myaccordion from './components/Accordion'
import Myalert from './components/Alert'
import Myautocomplete from './components/Autocomplete'
import NavBar from './components/Navbar'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar />
      <Myaccordion />
      <Myautocomplete />
      <Myalert />
    </div>
  )
}
