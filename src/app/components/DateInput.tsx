import { DatePicker } from '@heroui/react'

export default function Dateipnut() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Date Picker
      </h1>

      <div className='flex w-full flex-wrap md:flex-nowrap gap-4 items-center justify-center mt-8'>
        <DatePicker isRequired className='max-w-[284px]' label='Birth date' />
      </div>
    </div>
  )
}
