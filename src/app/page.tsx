'use client'
import Myaccordion from './components/Accordion'
import Myalert from './components/Alert'
import Myautocomplete from './components/Autocomplete'
import Avatars from './components/Avatar'
import Mybadge from './components/Badge'
import NavBar from './components/Navbar'
import Mybreadcrumbs from './components/Breadcrumbs'
import Mybutton from './components/Button'
import Mycalendar from './components/Calendar'
import Mycard from './components/Card'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar />
      <Myaccordion />
      <Myautocomplete />
      <Myalert />
      <Avatars />
      <Mybadge />
      <Mybreadcrumbs />
      <Mybutton />
      <Mycalendar />
      <Mycard />
    </div>
  )
}
