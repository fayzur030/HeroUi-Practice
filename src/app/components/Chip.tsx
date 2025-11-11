import { Chip } from '@heroui/react'

export default function Mychip() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Chip
      </h1>
      <div className='flex gap-4 items-center justify-center mt-8'>
        <Chip color='warning' variant='solid'>
          Solid
        </Chip>
        <Chip color='warning' variant='bordered'>
          Bordered
        </Chip>
        <Chip color='warning' variant='light'>
          Light
        </Chip>
        <Chip color='warning' variant='flat'>
          Flat
        </Chip>
        <Chip color='warning' variant='faded'>
          Faded
        </Chip>
        <Chip color='warning' variant='shadow'>
          Shadow
        </Chip>
        <Chip color='warning' variant='dot'>
          Dot
        </Chip>
      </div>
    </div>
  )
}
