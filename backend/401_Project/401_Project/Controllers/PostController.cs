using _401_Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace _401_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly FindAndSeekDbContext _context;

        public PostController(FindAndSeekDbContext temp)
        {
            _context = temp;
        }

        // Get all posts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Post>>> GetPosts()
        {
            return await _context.Posts.Include(p => p.User).ToListAsync();
        }

        // Get starred posts
        //[HttpGet("StarredPosts")]
        //public async Task<ActionResult<IEnumerable<Post>>> GetStarredPosts()
        //{
        //    var starredPostIds = await _context.Stars.Select(s => s.PostId).ToListAsync();
        //    var starredPosts = await _context.Posts.Where(p => starredPostIds.Contains(p.PostId)).Include(p.User).ToListAsync();
        //    return Ok(starredPosts);
        //}

        // Create a new post
        [HttpPost]
        public async Task<ActionResult<Post>> PostPost([FromBody] Post post)
        {
            if (post == null || string.IsNullOrWhiteSpace(post.PostContent))
            {
                return BadRequest("Post content is required");
            }

            _context.Posts.Add(post);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetPosts), new { id = post.PostId }, post);
        }

        [HttpPost("toggle-star")]
        public async Task<IActionResult> ToggleStar([FromBody] StarRequest request)
        {
            var star = await _context.Stars
                .FirstOrDefaultAsync(s => s.UserId == request.UserId && s.PostId == request.PostId);

            if (star != null)
            {
                _context.Stars.Remove(star);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Post unstarred." });
            }

            var newStar = new Star { UserId = request.UserId, PostId = request.PostId };
            _context.Stars.Add(newStar);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Post starred." });
        }

        [HttpGet("get-all")]
        public async Task<IActionResult> GetAllPosts(int userId)
        {
            var posts = await _context.Posts
                .Select(p => new
                {
                    p.PostId,
                    Author = p.User.FirstName + " " + p.User.LastName,
                    Content = p.PostContent,
                    IsStarred = _context.Stars.Any(s => s.UserId == userId && s.PostId == p.PostId)
                })
                .ToListAsync();

            return Ok(posts);
        }
    }
}

public class StarRequest
{
    public int UserId { get; set; }
    public int PostId { get; set; }
}