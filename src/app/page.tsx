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
import Mypopover from './components/Popover'
import Mycheckbox from './components/Checkbox'

import Mychip from './components/Chip'
import MycircularProgress from './components/CircularProgress'
import MycheckboxGroup from './components/CheckboxGroup'
import Mycode from './components/Code'
import Dateipnut from './components/DateInput'
import Mydropdown from './components/Dropdown'
import Mydrawer from './components/Drawer'
import MyFrom from './components/Form'
import MyInputOtp from './components/InputOtp'
import Mymodal from './components/Modal'
import MynumberInput from './components/NumberInput'
import Mypagination from './components/Pagination'

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
      <Mycheckbox />
      <MycheckboxGroup />
      <Mychip />
      <MycircularProgress />
      <Mycode />
      <Dateipnut />
      <Mydropdown />
      <Mydrawer />
      <MyFrom />
      <MyInputOtp />
      <Mymodal />
      <MynumberInput />
      <Mypagination />
      <Mypopover />
    </div>
  )
}
