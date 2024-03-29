using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity;

public class AppIdentityDbContextSeed
{
    public static async Task SeedUserAsync(UserManager<AppUser> userManager)
    {
        if (!userManager.Users.Any())
        {
            var user = new AppUser
            {
                DisplayName = "Bob",
                Email = "bob@email.com",
                UserName = "bob@email.com",
                Address = new Address
                {
                    FirstName = "Bob",
                    LastName = "Bobbity",
                    Street = "10 The Street",
                    City = "New York",
                    State = "NY",
                    Zipcode = "90210"
                }
            };
            
            await userManager.CreateAsync(user, "1234");
        }
    }
}