"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { createPost } from "../../actions"
import { useRef } from "react";
import { useRouter } from 'next/navigation'


const Form = () => {
  const router = useRouter()
  const ref= useRef(null)
  return (
    <form action={async ( FormData) => {
      createPost(FormData);
      ref.current?.reset(); router.refresh();
    }} ref={ref}>
    <div className="flex flex-col space-y-5 max-w-sm">
      <Input type="text" name="title" placeholder="title" />
      <Input type="text" name="content" placeholder="content" />

      <Button type="submit">Submit</Button>
    </div>
  </form>
  )
}

export default Form