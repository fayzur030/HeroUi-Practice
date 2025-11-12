'use client'

import { motion } from 'framer-motion'
import NavBar from './components/Navbar'
import Myaccordion from './components/Accordion'
import Myalert from './components/Alert'
import Myautocomplete from './components/Autocomplete'
import Avatars from './components/Avatar'
import Mybadge from './components/Badge'
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
import Mycheckbox from './components/Checkbox'
import MycheckboxGroup from './components/CheckboxGroup'
import Mychip from './components/Chip'
import MycircularProgress from './components/CircularProgress'
import Mycode from './components/Code'
import Dateipnut from './components/DateInput'
import Mydropdown from './components/Dropdown'
import Mydrawer from './components/Drawer'
import MyFrom from './components/Form'
import MyInputOtp from './components/InputOtp'
import Mymodal from './components/Modal'
import MynumberInput from './components/NumberInput'
import Mypagination from './components/Pagination'

// Reusable motion variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function App() {
  const components = [
    <Myaccordion key='1' />,
    <Myautocomplete key='2' />,
    <Myalert key='3' />,
    <Avatars key='4' />,
    <Mybadge key='5' />,
    <Mybreadcrumbs key='6' />,
    <Mybutton key='7' />,
    <Mycalendar key='8' />,
    <Mycard key='9' />,
    <Mycheckbox key='10' />,
    <MycheckboxGroup key='11' />,
    <Mychip key='12' />,
    <MycircularProgress key='13' />,
    <Mycode key='14' />,
    <Dateipnut key='15' />,
    <Mydropdown key='16' />,
    <Mydrawer key='17' />,
    <MyFrom key='18' />,
    <MyInputOtp key='19' />,
    <Mymodal key='20' />,
    <MynumberInput key='21' />,
    <Mypagination key='22' />,
    <Mypopover key='23' />,
    <MyProgress key='24' />,
    <MyRadioGroup key='25' />,
    <MyRangeCalender key='26' />,
    <MyScroolShaow key='27' />,
    <MySelect key='28' />,
    <MySkeleton key='29' />,
    <MySlider key='30' />,
    <MySnippet key='31' />,
    <MySpacer key='32' />,
    <MySpinner key='33' />,
    <MySwitch key='34' />,
    <MyTable key='35' />,
    <MyTabs key='36' />,
    <MyToast key='37' />,
    <MyTextrea key='38' />,
    <MyTime key='39' />,
    <MyTooltip key='40' />,
    <MyUser key='41' />,
  ]

  return (
    <div className='max-w-7xl mx-auto'>
      <NavBar />
      <div className='space-y-10 mt-10'>
        {components.map((Component, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
          >
            {Component}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
