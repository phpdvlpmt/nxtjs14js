

import React from 'react'
import prisma from "../../utils/db";

const getData = async (id) =>{
    const data = await prisma.post.findFirst({
     where: {
        id: id,
      },
      include:{
       author:true
      }
    });
  
    return data;
  }

const PlaygroundIp = async ({params}) => {
    const post = await getData(params.id);
    
    
  return (
    <div className="flex flex-col flex-1 h-full justify-center items-center py-10">
        
          <div key={post.id} className='flex flex-1 justify-center items-center flex-col h-full space-y-5'>
            <h1 className="font-bold text-7xl">{post.title}</h1>
            <p className='text-2xl'>{post.content}</p>
            <p className='text-xl text-muted-foreground'>{post.author.email}</p>
            
            
          </div>
        
      </div>
  )
}

export default PlaygroundIp