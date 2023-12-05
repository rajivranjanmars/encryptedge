import Image from 'next/image'
interface Props{
  key:string
    name:string;
    imgUrl:string;
    eventLink:string;
    eventTime:string;
    endTime:string;
    venue:string;
    closed:boolean;
}
//{key, name, imgUrl, eventLink, eventTime, venue }: Props
const EventCard = ({key, name, imgUrl, eventLink, eventTime, endTime ,venue,closed }: Props) => {
  const startDate = new Date(eventTime);
  const endDate = new Date(endTime);

  const startDateString = startDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
  const startTimeString = startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  const endDateString = endDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });

  
  const areDatesSame = startDate.toISOString().split('T')[0] === endDate.toISOString().split('T')[0];

  const endTimeString = endDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
console.log(startDateString,startTimeString,endTimeString,areDatesSame,endDateString)
  return (
    
    <div className={`flex flex-col m-10  my-15 items-center  p-5  rounded-xl text-green-500   active:shadow-2xl active:shadow-red-500
    ${!closed ? 'shadow-lg shadow-green-500 hover:p-2 hover:shadow-blue-500 hover:shadow-xl active:shadow-2xl active:shadow-red-500' 
    : 
    " shadow-lg shadow-red-500 hover:p-2 "}
    `}>
        
        <Image  
        src="/logo.png"
        alt= "Logo"
        width={150}
        height={150}
        />
         
        <h3 className='font-bold text-2xl'>{name}</h3>
      {areDatesSame ? (<>
        <p className='text-xl '>{startDateString}</p>
        <div >
         
          <i >{startTimeString} - </i>
          <i >{endTimeString} </i>
        </div>
      </>) : (<>
         
          <div>
            <i >{startDateString} - </i>
            <i >{endDateString} </i>
          </div>
          <div className='inline'> 
            <Image src="/icons/clock.svg" alt="time" width={18} height={18} className='inline' />
            <i className='text-xl '> {startTimeString}</i>
            </div>
          
      </>)}
         <div>
        <Image src="/icons/map.svg" alt="time" width={18} height={18} className='inline' />
          <i className='text-xl '> {venue}</i>
      </div>
    </div>
  )
}

export default EventCard