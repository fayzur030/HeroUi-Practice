import { Card, CardBody, CardFooter } from '@heroui/react'
import orange from '../assets/fruit-1.jpeg'
import tangerine from '../assets/fruit-2.jpeg'
import raspbeery from '../assets/fruit-3.jpeg'
import lomon from '../assets/fruit-4.jpeg'
import avocado from '../assets/fruit-5.jpeg'
import lemon2 from '../assets/lomon2.jpeg'
import banana from '../assets/fruit-7.jpeg'
import watermelon from '../assets/fruit-8.jpeg'
import Image from 'next/image'

export default function Mycard() {
  const list = [
    {
      title: 'Orange',
      img: orange,
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: tangerine,
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: raspbeery,
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: lomon,
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: avocado,
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: lemon2,
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: banana,
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: watermelon,
      price: '$12.20',
    },
  ]

  return (
    <div className='mt-15'>
      <h1 className='text-center mt-8 font-semibold text-4xl text-indigo-500'>
        Card
      </h1>
      <div className='gap-2 grid grid-cols-2 sm:grid-cols-4 mt-8 mb-8'>
        {list.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow='sm'
            onPress={() => console.log('item pressed')}
          >
            <CardBody className='overflow-visible p-0'>
              <div className='relative w-full h-[148px]'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-cover rounded-lg shadow '
                />
              </div>
            </CardBody>
            <CardFooter className='text-small justify-between'>
              <b>{item.title}</b>
              <p className='text-default-500'>{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
