import React, { useEffect, useState } from 'react';
import EventCard from "./EventCard";


interface IEventDto {
  eventId: number;
  userId: number;
  postedByName: string;
  title: string;
  description: string;
  location: string;
  eventYear: number;
  eventMonth: number;
  eventDay: number;
  eventHour: number;
  eventMinute: number;
  eventCreatedDate: string;
}

function EventsList() {
  const [events, setEvents] = useState<IEventDto[]>([]);

  useEffect(() => {
    fetch('http://localhost:5246/api/Events')
      .then((res) => res.json())
      .then((data: IEventDto[]) => {
        setEvents(data);
      })
      .catch((err) => console.error('Error fetching events:', err));
  }, []);

  return (
    <div>
      <h2>All Events</h2>
      {events.map((ev) => {
        const dateString = `${ev.eventMonth}/${ev.eventDay}/${ev.eventYear}`;
        return (
          <EventCard
            key={ev.eventId}
            eventId={ev.eventId}
            userId={ev.userId}
            title={ev.title}
            postedByName={ev.postedByName}
            date={dateString}
            location={ev.location}
            description={ev.description}
          />
        );
      })}
    </div>
  );
}

export default EventsList;
