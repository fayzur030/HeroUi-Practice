import { Code } from '@heroui/react'

export default function Mycode() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Code
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-8'>
        <Code color='default'>npm install @heroui/react</Code>
        <Code color='primary'>npm install @heroui/react</Code>
        <Code color='secondary'>npm install @heroui/react</Code>
        <Code color='success'>npm install @heroui/react</Code>
        <Code color='warning'>npm install @heroui/react</Code>
        <Code color='danger'>npm install @heroui/react</Code>
      </div>
    </div>
  )
}
