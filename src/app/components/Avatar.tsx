import { Avatar } from '@heroui/react'

export default function Avatars() {
  return (
    <div>
      <h1 className='text-center mt-8 font-semibold text-3xl text-gray-400'>
        Avatars
      </h1>
      <div className='flex gap-4 justify-center items-center mt-8'>
        <Avatar
          isBordered
          color='default'
          src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
        />
        <Avatar
          isBordered
          color='primary'
          src='https://i.pravatar.cc/150?u=a04258a2462d826712d'
        />
        <Avatar
          isBordered
          color='secondary'
          src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
        />
        <Avatar
          isBordered
          color='success'
          src='https://i.pravatar.cc/150?u=a04258114e29026302d'
        />
        <Avatar
          isBordered
          color='warning'
          src='https://i.pravatar.cc/150?u=a04258114e29026702d'
        />
        <Avatar
          isBordered
          color='danger'
          src='https://i.pravatar.cc/150?u=a04258114e29026708c'
        />
      </div>
    </div>
  )
}
