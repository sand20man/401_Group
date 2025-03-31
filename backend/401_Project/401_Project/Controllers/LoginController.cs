using _401_Project.Data;
using Microsoft.AspNetCore.Mvc;

namespace _401_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILogin _loginService;
        private readonly FindAndSeekDbContext _context;

        public LoginController(ILogin loginService, FindAndSeekDbContext context)
        {
            _loginService = loginService;
            _context = context;
        }

        [HttpGet("check")]
        public IActionResult Login([FromQuery] string username, [FromQuery] string password)
        {
            int userId = _loginService.LoginData(username, password);

            if (userId == 0)
            {
                return Unauthorized();
            }

            var user = _context.Users.FirstOrDefault(u => u.UserId == userId);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                user.UserId,
                user.FirstName,
                user.LastName
            });
        }

        [HttpGet("register")]
        public IActionResult Register([FromQuery] string first, string last, string email, string password)
        {
            _loginService.RegisterUser(first, last, email, password);
            return Ok(new { message = "User registered successfully" });
        }
    }
}
