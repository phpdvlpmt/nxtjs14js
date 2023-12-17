"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Design = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1639628735078-ed2f038a193e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8M2QlMjBpbGx1c3RyYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      src: "https://images.unsplash.com/photo-1638803040283-7a5ffd48dad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fDNkJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    },
    {
      src: "https://images.unsplash.com/photo-1636622433525-127afdf3662d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fDNkJTIwaWxsdXN0cmF0aW9ufGVufDB8fDB8fHww",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((image, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          key={index}
          className="relative h-60"
        >
          <Image
            src={image.src}
            alt="city"
            fill
            priority
            className="object-cover object-center w-full h-full  -z-10"
          />

          <div className="bg-black/60 h-auto p-5 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <h1 className="text-center text-4xl font-bold text-white">
              Design
            </h1>
          </div>
        </motion.div>
      ))}
      <div></div>
    </div>
  );
};

export default Design;
