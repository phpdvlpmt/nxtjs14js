import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import prisma from '../utils/db';
import { revalidatePath } from 'next/cache';
import { createPost } from '../../../actions';
import { getServerSession } from "next-auth/next"
import { authOptions } from '../utils/auth';
import { redirect } from 'next/navigation';

async function getData() {
  const data = await prisma.post.findMany({
   include: {
      author: true
    },
    orderBy: {
      createdAt: "desc",
    },
    
  });

  return data;
}


const Playground = async () => {
  const session = await getServerSession(authOptions) 
  if (!session || !session.user) {
    //redirect("/api/auth/signin");

    redirect("/api/auth/signin?callbackUrl=/playground");
  }
  const data = await getData();

  
  return (
    <div>
      <form  action={createPost}>
        <div className='flex flex-col space-y-5 max-w-sm'>
        <Input type="text" name="title" placeholder="title"/>
        <Input type="text" name="content" placeholder="content"/>
        <Input type="hidden" name="authorId" value={session.user.email}/>
        <Button type="submit">Submit</Button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
        {data.map((post) => (
          <div  key={post.id}>
            <h1 className='font-bold'>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.author.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playground