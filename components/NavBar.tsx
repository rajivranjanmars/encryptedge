import Image from 'next/image';
import {navLinks} from '@/constants'
import Link from 'next/link';

const NavBar = () => {

    
  return (
    <div  id='Home'>
       
        <div className='max-md:flex max-md:justify-center flex max-md: w-full md:fixed bg-slate-900 justify-between items-center py-2 '>
        <div className='flex flex-start'>
            <Image
            src="/logo.png"
            alt="encryptedge logo"
            width={75}
            height={75}
            className='max-sm:w-10'
            />
            <div className='pt-1 text-red-500 text-2xl max-sm:text-base font-bold  '>
                <span>Encrypt <br />Edge</span>
            </div>
        </div>
        <div className='max-md:hidden'>
            <ul className='flex mr-10 items-stretch '>
            {navLinks.map((items)=>(
                // eslint-disable-next-line react/jsx-key
                <li className='mx-3 text-green-600 hover:text-red-500 focus:text-red-500 active:text-red:500 font-semibold ' >
                    <Link href={items.link}>
                        <i>{items.text}</i>
                    </Link>
                </li>
            ))
            }
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default NavBar