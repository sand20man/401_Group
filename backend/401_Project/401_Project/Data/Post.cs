using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _401_Project.Data
{
    public class Post
    {
        [Key]
        public int PostId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        [Required]
        public int UserId { get; set; }
        [Required]
        public string PostContent { get; set; }
        public DateTime PostCreatedAt { get; set; } = DateTime.UtcNow;
    }
}
