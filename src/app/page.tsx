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
import MyProgress from './components/Progress'
import MyRadioGroup from './components/RadioGroup'
import MyRangeCalender from './components/RangeCalener'
import MyScroolShaow from './components/ScroolShadow'
import MySelect from './components/Select'
import MySkeleton from './components/Skeleton'
import MySlider from './components/Slider'
import MySnippet from './components/Snippet'
import MySpacer from './components/Spacer'
import MySpinner from './components/Spinner'
import MySwitch from './components/Switch'
import MyTable from './components/Table'
import MyTabs from './components/Tabs'
import MyToast from './components/Toast'
import MyTextrea from './components/TextArea'
import MyTime from './components/TimeInput'
import MyTooltip from './components/Tooltip'
import MyUser from './components/User'

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
      ..
      <Mypopover/>
      <MyProgress/>
      <MyRadioGroup/>
      <MyRangeCalender/>
      <MyScroolShaow/>
      <MySelect/>
      <MySkeleton/>
      <MySlider/>
      <MySnippet/>
      <MySpacer/>
      <MySpinner/>
      <MySwitch/>
      <MyTable/>
      <MyTabs/>
      <MyToast/>
      <MyTextrea/>
      <MyTime/>
      <MyTooltip/>
      <MyUser/>
    </div>
  )
}
