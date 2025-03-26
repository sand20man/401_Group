using Microsoft.AspNetCore.Mvc;
using _401_Project.Data;
namespace _401_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private FindAndSeekDbContext _postContext;
        
        public PostController(FindAndSeekDbContext temp) => _postContext = temp;

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            var postList = _postContext.Posts.ToList();

            return postList;
        }
        
        [HttpPost]
        public IActionResult CreatePost([FromBody] PostRequest request)
        {
            if (request == null || string.IsNullOrWhiteSpace(request.PosterName) || string.IsNullOrWhiteSpace(request.PostContent))
            {
                return BadRequest("Invalid post data.");
            }

            var newPost = new Post
            {
                UserId = 1, // Hardcoded user ID
                PostContent = request.PostContent,
                PosterName = request.PosterName,
                PostCreatedAt = DateTime.UtcNow
            };

            _postContext.Posts.Add(newPost);
            _postContext.SaveChanges();

            return CreatedAtAction(nameof(Get), new { id = newPost.PostId }, newPost);
        }
    }

    // DTO (Data Transfer Object) for the post request
    public class PostRequest
    {
        public string PosterName { get; set; }
        public string PostContent { get; set; }
    }
    
}