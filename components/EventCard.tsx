import Image from "next/image"
import Link from "next/link"

type EventCardProps ={
    title: string,
    image: string,
    slug: string,
    location: string,
    date: string,
    time: string
}

function EventCard({title, image, slug, location, date, time}:EventCardProps) {
  return (
    <Link  href={`/events/${slug}`} id="event-card" >
        <Image className="poster" src={image} alt={title} height={300} width={410}  />
        <div className="flex flex-row gap-2 ">
            <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
            <p>{location}</p>
        </div>
        <p className="title">{title}</p>

        <div className="datetime">
            <div className="flex flex-row gap-2 ">
                <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
                <p>{date}</p>
            </div>
            <div className="flex flex-row gap-2 ">
                <Image src="/icons/clock.svg" alt="date" width={14} height={14} />
                <p>{time}</p>
            </div>
        </div>
    </Link>
  )
}

export default EventCard