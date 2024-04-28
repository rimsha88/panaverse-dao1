import React from 'react'
import Wrapper from '../shared/Wrapper';
import HeroPoster from '@/app/components/assets/images/hero-poster.png'
import Image from 'next/image';
// {"components"}
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section>
    <Wrapper>
        <div className='flex  flex-col md:flex-row items-center' >
            {/* {"left side"} */}
            <div className='flex-1'>
            <h4 className='text-teal-700 text-lg font-semibold mt-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className='text-5xl  sm:text-6xl font-bold mt-2'>Certified Web 3.0 and Metaverse Developer</h1>
            <p className='mt-6 text-lg text-slate-600'>
                A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready
                <br/> for the Next Generation of the Internet<br/>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
             </p>
             <div className='mt-7'>
              <Button text={"Learn More"}/>
              </div>
              </div>
       {/* {"Right side"} */}
       <div className='flex-1' >
        <Image src={HeroPoster} alt='Hero Poster'/>
    </div>
       </div>
      
    </Wrapper>
    </section>
    
  )
}

export default Hero