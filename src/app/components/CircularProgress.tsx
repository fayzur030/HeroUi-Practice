import { CircularProgress } from '@heroui/react'

export default function MycircularProgress() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Circular Progress
      </h1>
      <div className='flex gap-4 items-center justify-center mt-8'>
        <CircularProgress aria-label='Loading...' color='default' />
        <CircularProgress aria-label='Loading...' color='primary' />
        <CircularProgress aria-label='Loading...' color='secondary' />
        <CircularProgress aria-label='Loading...' color='success' />
        <CircularProgress aria-label='Loading...' color='warning' />
        <CircularProgress aria-label='Loading...' color='danger' />
      </div>
    </div>
  )
}
