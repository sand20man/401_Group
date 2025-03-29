using _401_Project.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace _401_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {

        public ILogin _loginService;

        public LoginController(ILogin temp)
        {
            _loginService = temp;
        }

        [HttpGet("check")]
        public IActionResult Login([FromQuery] string username, [FromQuery] string password)
        {
            int success = _loginService.LoginData(username, password);

            if (success == 0)
                return Unauthorized();

            return Ok(success);
        }

        [HttpGet("register")]
        public int Register([FromQuery] string first, string last, string email, string password)
        {
            _loginService.RegisterUser(first, last, email, password);

            return 1;
            
        }


    }
}
