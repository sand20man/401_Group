using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _401_Project.Data
{
    public class Like
    {
        [Key]
        public int LikeId { get; set; }
        [ForeignKey(nameof(UserId))]
        public User User { get; set; }
        [Required]
        public int UserId { get; set; }
        [ForeignKey(nameof(PostId))]
        public Post Post { get; set; }
        [Required]
        public int PostId { get; set; }
    }
}
