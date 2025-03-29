

namespace _401_Project.Data
{
    public interface ILogin 
    {
        int LoginData(string email, string password);

        void RegisterUser(string first, string last, string email, string password);
    }
}
