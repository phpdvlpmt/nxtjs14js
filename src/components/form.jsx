import React from 'react'
import Input from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const Form = ({AuthorId, action}) => {
  return (
    <div><form action={action}  method="POST">
    <Input type="text" name="title" placeolder="title"/> 
    <Input type="text" name="content" placeolder="content"/> 
    <Input  type="hidden" name="authorId" value={AuthorId} />
    <Button type="submit">Submit</Button>
    
 </form></div>
  )
}

export default Form