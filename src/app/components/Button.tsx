import { Button } from '@heroui/react'

export default function Mybutton() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Button
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-8'>
        <Button color='default'>Default</Button>
        <Button color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
        <Button color='danger'>Danger</Button>
      </div>
    </div>
  )
}
