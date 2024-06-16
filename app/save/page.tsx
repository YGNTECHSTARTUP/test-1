import React from 'react'
import { Button } from '../component/Button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow} from '@/components/ui/table'
const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full'>
<Table>
      <TableCaption>A list of Button Variants.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Sn.No</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Size</TableHead>
          <TableHead className="text-right">Button</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>Default</TableCell>
          <TableCell>Small</TableCell>
          <TableCell className="text-right"><Button variant="default" size="small">Click Me</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell>Default</TableCell>
          <TableCell>Medium</TableCell>
          <TableCell className="text-right"><Button variant="default" size="medium">Click Me</Button></TableCell>
        </TableRow>
       
        <TableRow>
          <TableCell className="font-medium">4</TableCell>
          <TableCell>Blue</TableCell>
          <TableCell>Small</TableCell>
          <TableCell className="text-right"><Button variant="blue" size="small">Click Me</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">5</TableCell>
          <TableCell>Blue</TableCell>
          <TableCell>Medium</TableCell>
          <TableCell className="text-right"><Button variant="blue" size="medium">Click Me</Button></TableCell>
        </TableRow>
       
        <TableRow>
          <TableCell className="font-medium">7</TableCell>
          <TableCell>Red</TableCell>
          <TableCell>Small</TableCell>
          <TableCell className="text-right"><Button variant="red" size="small">Click Me</Button></TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">8</TableCell>
          <TableCell>Red</TableCell>
          <TableCell>Medium</TableCell>
          <TableCell className="text-right"><Button variant="red" size="medium">Click Me</Button></TableCell>
        </TableRow>
      
      </TableBody>
    </Table>
    </div>
    
  )
}

export default Page
