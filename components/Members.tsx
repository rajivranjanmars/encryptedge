import MemberCard from './cards/MemberCard'
import { MembersList } from '@/constants'

const Members = () => {
  return (
    <div id='Members' className='mx-5'>
      <div>
        <h1 className="text-5xl my-10 font-bold text-red-500 py-3">Members</h1>
        <div className="grid  grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1  ">
          {MembersList.map((items) => (

            <MemberCard key={items.name} name={items.name} imgUrl={items.imageUrl} designation={items.designation} socialprofile={items.socials} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Members