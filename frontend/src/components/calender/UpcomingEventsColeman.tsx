import React, { useState, useEffect, useContext } from "react";
import EventCard from "./EventCard";
import NewEventForm from "./CreateEventForm";
import BottomNavigation from "../navbar/BottomNavigation";
import styles from "./UpcomingEventsColeman.module.css";
import { AuthContext } from "../../contexts/AuthContext";

interface EventData {
  eventId: number;
  userId: number;
  postedByName?: string;
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

const UpcomingEventsColeman: React.FC = () => {
  const { currentUserId } = useContext(AuthContext);
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showNewEventForm, setShowNewEventForm] = useState<boolean>(false);

  const fetchEvents = () => {
    fetch("http://localhost:4000/api/Events")
      .then((res) => res.json())
      .then((data: EventData[]) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className={styles.calendarContainer}>
      <h2 className={styles.upcomingTitle}>Upcoming Events</h2>
      <div className={styles.eventsScrollContainer}>
        {loading ? (
          <p>Loading events...</p>
        ) : events.length > 0 ? (
          events.map((event) => {
            const formattedDate = `${event.eventMonth}/${event.eventDay}/${event.eventYear} ${event.eventHour
              .toString()
              .padStart(2, "0")}:${event.eventMinute.toString().padStart(2, "0")}`;
            const postedBy = event.postedByName || "Unknown";
            return (
              <EventCard
                key={event.eventId}
                eventId={event.eventId}
                userId={event.userId}
                title={event.title}
                postedByName={postedBy}
                date={formattedDate}
                location={event.location}
                description={event.description}
              />
            );
          })
        ) : (
          <p>No events found.</p>
        )}
      </div>
      <button className={styles.fabButton} onClick={() => setShowNewEventForm(true)}>
        +
      </button>
      <BottomNavigation />
      {showNewEventForm && (
        <NewEventForm
          onCancel={() => setShowNewEventForm(false)}
          onEventCreated={() => {
            setShowNewEventForm(false);
            fetchEvents();
          }}
        />
      )}
    </div>
  );
};

export default UpcomingEventsColeman;
