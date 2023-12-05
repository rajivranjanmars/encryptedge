/* eslint-disable react/jsx-key */
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { socials } from "@/constants"

const Contact = () => {
  return (
      <div className='mx-5 my-10'>
    <div id='contact' className='flex  justify-center    '>
        <Link href="mailto:abc@xyx.com">
        <div className=" flex rounded  h-10 m-2 px-2 items-center bg-green-500 text-xl font-semibold text-red-500 w-40 justify-center">
            <Image
            src="./icons/mails.svg"
            alt="mail"
            width={20}
            height={20}
            className='mx-2'
            />
             Contact Us</div>
        </Link>
        </div>
        <br />
          <div className="flex flex-col  items-start justify-start mb-10">
              <h1 className="text-5xl font-bold text-red-500 py-3">Encrypt Edge</h1>
              <i className="text-lg text-green-500">Hack to protect Not to harm</i>
              <ul className="flex flex-wrap ">
                  {socials.map((items) => (
                      <a href={items.link}>
                      <li className="m-1 p-1 border-double border-4 border-green-500 rounded-full ">
                          
                              <Image
                                  src={`./icons/${items.text}.svg`}
                                  alt={items.text}
                                  width={15}
                                  height={36}
                                  className="m-1 border-5"
                              />
                          
                      </li>
                      </a>
                  ))}
              </ul>
          </div>
          <i className='text-xl text-green-500'>Made-with ❤️ by Encrypt-Edge Team</i>
    
</div>
  )
}

export default Contact