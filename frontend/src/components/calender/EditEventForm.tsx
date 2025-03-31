// src/components/calender/EditEventForm.tsx

import React, { useState, useEffect } from 'react';
import styles from './CreateEventForm.module.css'; 
// Reuse the same CSS or create a separate EditEventForm.module.css

interface EditEventFormProps {
  existingEvent: {
    eventId: number;
    userId: number;
    title: string;
    description: string;
    location: string;
    eventYear: number;
    eventMonth: number;
    eventDay: number;
    eventHour: number;
    eventMinute: number;
  };
  onCancel: () => void;
  onEventUpdated: () => void;
}

const EditEventForm: React.FC<EditEventFormProps> = ({
  existingEvent,
  onCancel,
  onEventUpdated,
}) => {
  const [title, setTitle] = useState(existingEvent.title);
  const [description, setDescription] = useState(existingEvent.description);
  const [location, setLocation] = useState(existingEvent.location);
  const [eventDate, setEventDate] = useState(''); // "YYYY-MM-DD"
  const [hour12, setHour12] = useState(12);
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('AM');
  const [error, setError] = useState('');

  useEffect(() => {
    // Convert existingEvent's (year, month, day) to a "YYYY-MM-DD" string
    const yyyy = existingEvent.eventYear.toString().padStart(4, '0');
    const mm = existingEvent.eventMonth.toString().padStart(2, '0');
    const dd = existingEvent.eventDay.toString().padStart(2, '0');
    setEventDate(`${yyyy}-${mm}-${dd}`);

    // Convert 24-hour to 12-hour
    let eventHour = existingEvent.eventHour;
    if (eventHour === 0) {
      setHour12(12);
      setAmpm('AM');
    } else if (eventHour === 12) {
      setHour12(12);
      setAmpm('PM');
    } else if (eventHour > 12) {
      setHour12(eventHour - 12);
      setAmpm('PM');
    } else {
      setHour12(eventHour);
      setAmpm('AM');
    }
  }, [existingEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !location || !eventDate) {
      setError('Please fill in all fields.');
      return;
    }

    const parsedDate = new Date(eventDate);
    if (isNaN(parsedDate.getTime())) {
      setError('Invalid date format.');
      return;
    }
    const eventYear = parsedDate.getFullYear();
    const eventMonth = parsedDate.getMonth() + 1; 
    const eventDay = parsedDate.getDate();

    // Convert 12-hour to 24-hour
    let finalHour = hour12;
    if (ampm === 'PM' && hour12 < 12) {
      finalHour = hour12 + 12;
    } else if (ampm === 'AM' && hour12 === 12) {
      finalHour = 0;
    }

    const updatedEvent = {
      ...existingEvent,
      title,
      description,
      location,
      eventYear,
      eventMonth,
      eventDay,
      eventHour: finalHour,
      eventMinute: 0, // or existingEvent.eventMinute if you want to keep the original
    };

    fetch(`http://localhost:5246/api/Events/${existingEvent.eventId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update event.');
        }
        onEventUpdated();
      })
      .catch((err) => {
        setError('Error updating event: ' + err.message);
      });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.backButton} onClick={onCancel}>
            &lt;
          </button>
          <h2>Edit Event</h2>
        </div>
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <label>
            Date:
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </label>

          <label>
            Time:
            <div className={styles.timeSelector}>
              <select
                value={hour12}
                onChange={(e) => setHour12(parseInt(e.target.value))}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <select
                value={ampm}
                onChange={(e) => setAmpm(e.target.value as 'AM' | 'PM')}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </label>

          <button type="submit" className={styles.submitButton}>
            Update Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEventForm;
