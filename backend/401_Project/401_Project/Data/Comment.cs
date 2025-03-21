using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _401_Project.Data
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        [Required]
        public int UserId { get; set; }
        [ForeignKey(nameof(PostId))]
        public Post Post { get; set; }
        [Required]
        public int PostId { get; set; }
        [Required]
        public string CommentContent { get; set; }
        public DateTime CommentCreatedAt { get; set; } = DateTime.UtcNow;
    }
}
