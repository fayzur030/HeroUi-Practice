import { InputOtp } from '@heroui/react'

export default function MyInputOtp() {
  const colors = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        InPutOtp
      </h1>
      <div className='w-full flex flex-wrap gap-4 items-center justify-center mt-8'>
        {colors.map((color) => (
          <div key={color}>
            <div className='text-default-500'>color: {color}</div>
            <InputOtp color={color} length={4} />
          </div>
        ))}
      </div>
    </div>
  )
}
