import React from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import logo from '@/../public/logo.png'
import { FaFacebook, FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <section className=' rounded-xl border border-slate-200'>
      <Wrapper>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='max-w-sm '>
                <Image src={logo} alt='logo'/>
                <p className='text-slate-600 font-lg text-xl mt-8'>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
           <div className='flex gap-x-4 mt-4'>
           <FaFacebook className='h-8 w-8  text-blue-400' />
           <FaGithub className='h-8 w-8  text-blue-400' />
<CiTwitter  className='h-8 w-8 text-white bg-blue-400 rounded-full'/>
           </div>
            </div>
            
           <div>
<h1 className='text-lg font-bold  mt-12 '>Program</h1>
<ul className='text-lg font-lg mt-6'>
    <li className='mt-2'>Web 3.0 and Metaverse Developer</li>
    <li className='mt-2'>Artificial Intelligence</li>
    <li className='mt-2'>Cloud-Native Computing</li>
    <li className='mt-2'>Ambient Computing and Iot</li>
    <li className='mt-2'>Genomics and Bioformatics</li>
    <li className='mt-2'>Network Programmability and Automation</li>
</ul>
           </div>
            <div>
                <h1 className='text-lg font-bold mt-12'>Page</h1>
                <ul className='text-lg font-lg mt-6'>
                    <li className='mt-2'>Home</li>
                    <li className='mt-2'>Quarter 1</li>
                    <li className='mt-2'>Quarter 2</li>
                    <li className='mt-2'>Quarter 3</li>
                </ul>
            </div>
            
        </div>
        </Wrapper>  
    </section>
  )
}

export default Footer