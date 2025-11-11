import React from 'react'
import { Calendar } from '@heroui/react'
import { today, getLocalTimeZone, isWeekend } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'

export default function Mycalendar() {
  const [date, setDate] = React.useState(today(getLocalTimeZone()))
  const { locale } = useLocale()
  const isInvalid = isWeekend(date, locale)

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Calendar
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-10 mb-8'>
        <Calendar
          aria-label='Date (Invalid on weekends)'
          errorMessage={isInvalid ? 'We are closed on weekends' : undefined}
          isInvalid={isInvalid}
          value={date}
          onChange={setDate}
        />
      </div>
    </div>
  )
}
