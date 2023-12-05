/* eslint-disable react/jsx-key */
import Link from "next/link";
import EventCard from "./cards/EventCard";
import { events } from "@/constants"

const Events = () => {
  const now = new Date();

  const upcomingEvents = events.filter((event) => new Date(event.time) > now);
  const closedEvents = events.filter((event) => new Date(event.time) <= now);

  return (
    <div id='Events' className='mx-5 md:mx:auto'>
      <div>
        <h1 className="text-5xl my-10 text-red-500 py-3">Upcoming Events</h1>
        <div className="grid grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
          
          {upcomingEvents.map((event) => (
              <Link href={event.eventLink}>
            <EventCard key={event.name} name={event.name} imgUrl={event.imageUrl} eventLink={event.eventLink} eventTime={event.time} endTime={event.endtime} venue={event.venue} closed={false} />
            
            </Link>
          ))}
        </div>

        <h1 className="text-5xl my-10 text-red-500 py-3">Closed Events</h1>
        <div className="grid grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
          {closedEvents.map((event) => (

            <EventCard key={event.name} name={event.name} imgUrl={event.imageUrl} eventLink={event.eventLink} eventTime={event.time} endTime={event.endtime} venue={event.venue} closed={true} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Events