import React from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  RadioGroup,
  Radio,
} from '@heroui/react'

export default function Mydropdown() {
  const [selectedColor, setSelectedColor] = React.useState('default')

  const variants = ['solid', 'bordered', 'light', 'flat', 'faded', 'shadow']

  const DropdownContent = ({ variant, color }) => (
    <Dropdown>
      <DropdownTrigger>
        <Button className='capitalize' color={color} variant={variant}>
          {variant}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Dropdown Variants'
        color={color}
        variant={variant}
      >
        <DropdownItem key='new'>New file</DropdownItem>
        <DropdownItem key='copy'>Copy link</DropdownItem>
        <DropdownItem key='edit'>Edit file</DropdownItem>
        <DropdownItem key='delete' className='text-danger' color='danger'>
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Dropdown
      </h1>
      <div className='flex flex-wrap gap-4 items-center justify-center mt-8'>
        {variants.map((variant) => (
          <DropdownContent
            key={variant}
            color={selectedColor}
            variant={variant}
          />
        ))}
        <RadioGroup
          color={selectedColor}
          defaultValue='default'
          label='Select dropdown color'
          orientation='horizontal'
          onValueChange={setSelectedColor}
        >
          <Radio value='default'>Default</Radio>
          <Radio value='primary'>Primary</Radio>
          <Radio value='secondary'>Secondary</Radio>
          <Radio value='success'>Success</Radio>
          <Radio value='warning'>Warning</Radio>
          <Radio value='danger'>Danger</Radio>
        </RadioGroup>
      </div>
    </div>
  )
}
