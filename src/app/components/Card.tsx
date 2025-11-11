import { Card, CardBody, CardFooter, Image } from '@heroui/react'
import product1 from '../assets/Product 1.jpeg'
import product2 from '../assets/Product 2.jpeg'
import product3 from '../assets/Products 3.png'
import product4 from '../assets/Product 4.jpeg'
import product5 from '../assets/Product 5.webp'
import product6 from '../assets/Product 6.webp'
import product7 from '../assets/Product 7.jpg'
import product8 from '../assets/Product 8.webp'

export default function Mycard() {
  const list = [
    {
      title: 'Orange',
      img: product1,
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: product2,
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: product3,
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: product4,
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: product5,
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: product6,
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: product7,
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: product8,
      price: '$12.20',
    },
  ]

  return (
    <div className='gap-2 grid grid-cols-2 sm:grid-cols-4'>
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow='sm'
          onPress={() => console.log('item pressed')}
        >
          <CardBody className='overflow-visible p-0'>
            <Image
              alt={item.title}
              className='w-full object-cover h-[140px]'
              radius='lg'
              shadow='sm'
              src={item.img}
              width='100%'
            />
          </CardBody>
          <CardFooter className='text-small justify-between'>
            <b>{item.title}</b>
            <p className='text-default-500'>{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
