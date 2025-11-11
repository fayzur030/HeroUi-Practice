import {Snippet} from "@heroui/react";

export default function MySnippet() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Snippet-role
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <div className="flex flex-wrap gap-4">
      <Snippet color="default">npm install @heroui/react</Snippet>
      <Snippet color="primary">npm install @heroui/react</Snippet>
      <Snippet color="secondary">npm install @heroui/react</Snippet>
      <Snippet color="success">npm install @heroui/react</Snippet>
      <Snippet color="warning">npm install @heroui/react</Snippet>
      <Snippet color="danger">npm install @heroui/react</Snippet>
    </div>
    </div>
    </div>
  )
}
