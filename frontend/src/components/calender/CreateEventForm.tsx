import React, { useState, useContext } from 'react';
import styles from './CreateEventForm.module.css';
import { AuthContext } from '../../contexts/AuthContext';

interface NewEventFormProps {
  onCancel: () => void;
  onEventCreated: () => void;
}

const NewEventForm: React.FC<NewEventFormProps> = ({
  onCancel,
  onEventCreated,
}) => {
  const { currentUserId } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [hour12, setHour12] = useState(12);
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('AM');
  const [error, setError] = useState('');

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

    let finalHour = hour12;
    if (ampm === 'PM' && hour12 < 12) {
      finalHour = hour12 + 12;
    } else if (ampm === 'AM' && hour12 === 12) {
      finalHour = 0;
    }

    const newEvent = {
      userId: currentUserId,
      title,
      description,
      location,
      eventYear,
      eventMonth,
      eventDay,
      eventHour: finalHour,
      eventMinute: 0,
    };

    console.log("Creating event:", newEvent);

    fetch('http://localhost:4000/api/Events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEvent),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to create event.');
        }
        return res.json();
      })
      .then(() => {
        onEventCreated();
      })
      .catch((err) => {
        setError('Error creating event: ' + err.message);
      });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.backButton} onClick={onCancel}>
            &lt;
          </button>
          <h2>Create New Event</h2>
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Location:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label>
            Date:
            <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
          </label>
          <label>
            Time:
            <div className={styles.timeSelector}>
              <select value={hour12} onChange={(e) => setHour12(parseInt(e.target.value))}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <select value={ampm} onChange={(e) => setAmpm(e.target.value as 'AM' | 'PM')}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </label>
          <button type="submit" className={styles.submitButton}>
            Submit Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewEventForm;
