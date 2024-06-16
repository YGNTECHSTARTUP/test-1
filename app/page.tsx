import Link from 'next/link'
import React from 'react'
import { Button } from './component/Button'

const page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full'>
<Link href="/product">
<Button variant="default" size="medium">Go TO Product Page</Button>
  </Link>
    </div>
  
  )
}

export default page