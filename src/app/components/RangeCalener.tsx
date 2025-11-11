import React from "react";
import {RangeCalendar} from "@heroui/react";
import {today, getLocalTimeZone, isWeekend} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";

export default function MyRangeCalender() {
  let [date, setDate] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({weeks: 1}),
  });
  let {locale} = useLocale();
  let isInvalid = isWeekend(date.start, locale) || isWeekend(date.end, locale);

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        RangeCalendar
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <RangeCalendar
      aria-label="Date (Invalid on weekends)"
      errorMessage={isInvalid ? "We are closed on weekends" : undefined}
      isInvalid={isInvalid}
      value={date}
      onChange={setDate}
    />
    </div>
    </div>
  )
}

