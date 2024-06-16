"use client"
import React, { useState } from 'react'
import { Button } from '../component/Button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

const Page = () => {
  const [color, setColor] = useState<'default' | 'blue' | 'red' | null | undefined>('default')
  const [size, setSize] = useState<'default' | 'small' | 'medium' | null | undefined>('default')
  const [data, setData] = useState('default' as string)

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputColor = e.target.value.toLowerCase();
    if (inputColor === 'blue' || inputColor === 'red') {
      setData(`You have selected ${inputColor} `)
      setColor(inputColor);
    } else {
        setData('Please enter either "blue" or "red"')
      setColor('default');
    }
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputSize = e.target.value.toLowerCase();
    if (inputSize === 'small' || inputSize === 'medium') {
        setData(`You have selected ${inputSize} `)
      setSize(inputSize);
    } else {
      setData('Please enter either "small" or "medium"')
      setSize('default');
    }
  }

  return (
    <div className='flex justify-center items-center min-w-full min-h-screen font-sans font-bold'>
        <div>
        <div className={`text-${color}-500`}>{data}</div>
        Enter Color<Input placeholder='Enter What Colour You Want' onChange={handleColorChange} />
      Enter Size<Input placeholder='Enter What Size You Want' onChange={handleSizeChange} />
      <br/>
      <Link href='/save'>
      <Button variant={color} size={size}>Click Me</Button> 
      </Link>
        </div>

    </div>
  )
}

export default Page
