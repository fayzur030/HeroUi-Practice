import { NumberInput } from '@heroui/react'

export default function MynumberInput() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Number Input
      </h1>
      <div className='flex items-center justify-center mt-8'>
        <NumberInput
          isClearable
          className='max-w-xs'
          defaultValue={1024}
          label='Amount'
          placeholder='Enter the amount'
          variant='bordered'
          onClear={() => console.log('number input cleared')}
        />
      </div>
    </div>
  )
}
