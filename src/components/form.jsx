"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { createPost } from "../../actions"
import { useRef } from "react";



const Form = () => {
  
  const ref= useRef(null)
  return (
    <form action={async ( FormData) => {
      ref.current?.reset(); 
     await createPost(FormData);
      
    }} ref={ref}>
    <div className="flex flex-col space-y-5 max-w-sm">
      <Input type="text" name="title" placeholder="title" required/>
      <Input type="text" name="content" placeholder="content" required />

      <Button type="submit">Submit</Button>
    </div>
  </form>
  )
}

export default Form