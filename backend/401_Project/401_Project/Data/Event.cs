﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace _401_Project.Data
{
    public class Event
    {
        [Key]
        public int EventId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User? User { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        [MaxLength(255)]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [MaxLength (255)]
        public string Location { get; set; }
        [Required]
        public int EventYear { get; set; }
        [Required]
        public int EventMonth { get; set; }
        [Required]
        public int EventDay { get; set; }
        [Required]
        public int EventHour { get; set; }
        [Required]
        public int EventMinute { get; set; }
        [Required]
        public DateTime EventCreatedDate { get; set; } = DateTime.UtcNow;
    }
}