/* eslint-disable react/jsx-key */
import Image from 'next/image'
import Link from 'next/link';
interface Props {
    name: string;
    imgUrl: string;
    designation: string;
    socialprofile: {text:string,link:string}[]};


const MemberCard = ({name,imgUrl,designation,socialprofile}:Props) => {
  return (
      <div className='flex flex-col  m-5 max-w-xs items-center mx-5 p-5  rounded-xl text-green-500  shadow-sm shadow-blue-500 hover:shadow-xl hover:shadow-green-500  hover:p-4'>

          <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={150}
          />

          <h3 className='font-bold text-2xl'>{name}</h3>
          <p className='text-xl '>{designation}</p>

          <div className='inline'>
            
              {socialprofile.map((social) => (
                <Link href={`#`}>
                <Image
                    src={`/icons/${social.text}.svg`}
                    alt={`${social.link}`}
                    width={20}
                    height={20}
                    className='inline m-5'
                />
                </Link>
            ))}
          </div>
         

      </div>
  )
}

export default MemberCard

