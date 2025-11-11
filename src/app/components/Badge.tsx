import { Badge, Avatar } from '@heroui/react'

export default function Mybadge() {
  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Badge
      </h1>
      <div className='flex gap-3 justify-center items-center mt-8'>
        <Badge color='default' content='5'>
          <Avatar
            radius='md'
            src='https://i.pravatar.cc/150?u=a042f81f4e29026024d'
          />
        </Badge>
        <Badge color='primary' content='5'>
          <Avatar
            radius='md'
            src='https://i.pravatar.cc/150?u=a04258a2462d826712d'
          />
        </Badge>
        <Badge color='secondary' content='5'>
          <Avatar
            radius='md'
            src='https://i.pravatar.cc/300?u=a042581f4e29026709d'
          />
        </Badge>
        <Badge color='success' content='5'>
          <Avatar
            radius='md'
            src='https://i.pravatar.cc/150?u=a04258114e29026302d'
          />
        </Badge>
        <Badge color='warning' content='5'>
          <Avatar
            radius='md'
            src='https://i.pravatar.cc/150?u=a04258114e29026708c'
          />
        </Badge>
        <Badge color='danger' content='5'>
          <Avatar
            radius='md'
            src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
          />
        </Badge>
      </div>
    </div>
  )
}
