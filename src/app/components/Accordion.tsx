'use client'
import { Accordion, AccordionItem } from '@heroui/react'

export default function Myaccordion() {
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <div className='mt-15 mb-12'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Accordion
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-15 mb-10'>
    <Accordion>
      <AccordionItem key='1' aria-label='Accordion 1' title='Accordion 1'>
        {defaultContent}
      </AccordionItem>
      <AccordionItem key='2' aria-label='Accordion 2' title='Accordion 2'>
        {defaultContent}
      </AccordionItem>
      <AccordionItem key='3' aria-label='Accordion 3' title='Accordion 3'>
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
    </div>
  )
}
