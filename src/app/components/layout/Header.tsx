import Image from "next/image";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import { BiAlignLeft } from "react-icons/bi";



const Header = () => {
  return (
    <header className="sticky top-0 z-10  bg-white">
    <Wrapper>
    <div className="flex justify-between 
     py-4  items-center  ">
        {/* <div className="text-xl font-bold">Panaverse dao</div> */} 
    <Image src={'/logo.png'} alt="panaverse dao" height={100} width={100}/>
      
    <ul className=' hidden md:flex space-x-[60px] text-lg font-medium'>
                <li  className='hover:scale-125 pt-2'>
                    <Link className='hover:text-teal-700' href={'/'}>Home</Link>
                </li>
                
                <li  className='hover:scale-125 pt-2'>
                    <Link className='hover:text-teal-700' href={'/'}>Courses 
                    </Link>
                </li>
                <div className="rounded-xl">
                    <Button  text={"Apply"}/>
            {/* <button className='px-6 py-2 text-white rounded-xl text-xl font-semibold bg-teal-600 hover:bg-teal-700 hover:scale-125 hover:antialiased'> */}
                {/* Apply</button> */}

        </div>
            </ul>
            <div className='static md:hidden text-3xl'><BiAlignLeft /></div>
    </div>
    
    </Wrapper>
    </header>
  )
}

export default Header