using System.ComponentModel.DataAnnotations;
using System.Runtime.ConstrainedExecution;
using static _401_Project.Data.LoginRepo;

namespace _401_Project.Data
{
    
    public class LoginRepo : ILogin
    {
        private readonly FindAndSeekDbContext _context;

        public LoginRepo(FindAndSeekDbContext temp)
        {
            _context = temp;
        }


        //Create the method for the required API return
        public int LoginData(string email, string password)
        {
            User userid = _context.Users.Where(b => email == b.Email && b.Password == password)
                .FirstOrDefault();

            if (userid == null)
            {
                return (0);
            }

            return (userid.UserId);
        }

        public void RegisterUser(string first, string last, string email, string password)
        {
            int maxUserId = _context.Users.Max(u => u.UserId);


            User newUser = new User
            { UserId = maxUserId + 1,
                FirstName = first,
                LastName = last,
                Email = email,
                Password = password
            };
            _context.Users.Add(newUser);

            _context.SaveChanges();


        }

    }

    
}
