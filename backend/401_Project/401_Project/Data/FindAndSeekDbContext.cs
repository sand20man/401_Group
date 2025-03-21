using Microsoft.EntityFrameworkCore;

namespace _401_Project.Data
{
    public class FindAndSeekDbContext : DbContext
    {
        public FindAndSeekDbContext(DbContextOptions<FindAndSeekDbContext> options) : base(options) 
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Star> Stars { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Event> Events { get; set; }
    }
}
