import React from 'react'
import { Alert, Button } from '@heroui/react'

export default function Myalert() {
  const [isVisible, setIsVisible] = React.useState(true)

  const title = 'Success Notification'
  const description =
    "Your action has been completed successfully. We'll notify you when updates are available."

  return (
    <>
      <h1 className='text-center text-3xl mb-2 font-semibold mt-20'>
        Aleart Section
      </h1>
      <div className='flex flex-col gap-4 mt-6'>
        {isVisible ? (
          <Alert
            color='success'
            description={description}
            isVisible={isVisible}
            title={title}
            variant='faded'
            onClose={() => setIsVisible(false)}
          />
        ) : (
          <Button variant='bordered' onPress={() => setIsVisible(true)}>
            Show Alert
          </Button>
        )}
      </div>
    </>
  )
}
