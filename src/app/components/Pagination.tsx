import { Pagination } from '@heroui/react'

export default function Mypagination() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Pagination
      </h1>
      <div className='flex gap-4 items-center justify-center mt-8'>
        <Pagination initialPage={1} total={10} />
      </div>
    </div>
  )
}
