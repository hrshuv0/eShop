using Core.Entities.Identity;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static async Task AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
        var loggerFactory = services.BuildServiceProvider().GetRequiredService<ILoggerFactory>();
        services.AddDbContext<AppIdentityDbContext>(options =>
        {
            options.UseSqlServer(config.GetConnectionString("IdentityConnection"))
                .LogTo(Console.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging()
                .UseLoggerFactory(loggerFactory);
        });

        services.AddIdentity<AppUser, IdentityRole>(opt =>
        {
            opt.Password.RequireNonAlphanumeric = false;
            opt.Password.RequireDigit = false;
            opt.Password.RequireUppercase = false;
            opt.Password.RequireLowercase = false;
            opt.Password.RequiredLength = 4;
            opt.Password.RequiredUniqueChars = 0;
            
        })
            .AddEntityFrameworkStores<AppIdentityDbContext>()
            .AddDefaultTokenProviders();

        try
        {
            var context = services.BuildServiceProvider().GetRequiredService<AppIdentityDbContext>();
            await context.Database.MigrateAsync();
            
            var userManager = services.BuildServiceProvider().GetRequiredService<UserManager<AppUser>>();
            var signInManager = services.BuildServiceProvider().GetRequiredService<SignInManager<AppUser>>();

            await AppIdentityDbContextSeed.SeedUserAsync(userManager);
            
            
            services.AddAuthentication();
        }
        catch (Exception e)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(e, "An error occured during migration (Identity)");
        }
        
    }

}