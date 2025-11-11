import { Checkbox } from '@heroui/react'

export default function Mycheckbox() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Checkbox
      </h1>
      <div className='flex gap-4 items-center justify-center mt-8'>
        <Checkbox defaultSelected color='default'>
          Default
        </Checkbox>
        <Checkbox defaultSelected color='primary'>
          Primary
        </Checkbox>
        <Checkbox defaultSelected color='secondary'>
          Secondary
        </Checkbox>
        <Checkbox defaultSelected color='success'>
          Success
        </Checkbox>
        <Checkbox defaultSelected color='warning'>
          Warning
        </Checkbox>
        <Checkbox defaultSelected color='danger'>
          Danger
        </Checkbox>
      </div>
    </div>
  )
}
