import React, { useState, useContext } from "react";
import styles from "./EventCard.module.css";
import { AuthContext } from "../../contexts/AuthContext";

interface EventCardProps {
  eventId: number;
  userId: number;
  title: string;
  postedByName: string;
  date: string;
  location: string;
  description: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const EventCard: React.FC<EventCardProps> = ({
  eventId,
  userId,
  title,
  postedByName,
  date,
  location,
  description,
  onEdit,
  onDelete,
}) => {
  const { currentUserId } = useContext(AuthContext);
  const isOwner = currentUserId !== null && userId === currentUserId;
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleEdit = () => {
    setMenuOpen(false);
    onEdit ? onEdit() : console.log("Edit event");
  };
  const handleDelete = () => {
    setMenuOpen(false);
    if (window.confirm("Are you sure you want to delete this event?")) {
      onDelete ? onDelete() : console.log("Delete event");
    }
  };
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventCardHeader}>
        {isOwner && (
          <div className={styles.menuContainer}>
            <button className={styles.menuButton} onClick={toggleMenu}>
              &#8942;
            </button>
            {menuOpen && (
              <div className={styles.menuDropdown}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            )}
          </div>
        )}
        <h3 className={styles.eventCardTitle}>{title}</h3>
        <p className={styles.eventCardPostedBy}>Posted by {postedByName}</p>
      </div>
      <hr className={styles.divider} />
      <p className={styles.eventCardDate}>Date: {date}</p>
      <hr className={styles.divider} />
      <p className={styles.eventCardLocation}>Location: {location}</p>
      <hr className={styles.divider} />
      <p className={styles.eventCardDescription}>Details: {description}</p>
    </div>
  );
};

export default EventCard;
