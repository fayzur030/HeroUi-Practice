import { Breadcrumbs, BreadcrumbItem } from '@heroui/react'

export default function Mybreadcrumbs() {
  const colors = [
    'foreground',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ]

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-3xl text-gray-400'>
        Breadcrumbs
      </h1>
      <div className='flex flex-col flex-wrap gap-4 justify-center items-center mt-8'>
        {colors.map((color) => (
          <Breadcrumbs key={color} color={color}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>
        ))}
      </div>
    </div>
  )
}
