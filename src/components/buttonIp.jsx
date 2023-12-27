"use client"
import React from 'react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const ButtonIp = ({id}) => {
    const router = useRouter()
  return (
    <>
   {/*  <Button variant="outline" onClick={() => router.push(`/playground/${id}`)}>Read more</Button> */}
   <Link href={`/playground/${id}`}>
   <Button variant="outline" >Read more</Button>
   </Link>
    </>
  )
}

export default ButtonIp