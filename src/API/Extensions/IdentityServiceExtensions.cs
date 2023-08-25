using System.Text;
using Core.Entities.Identity;
using Infrastructure.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static async Task AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
        var loggerFactory = services.BuildServiceProvider().GetRequiredService<ILoggerFactory>();

        var identityConnectionString = config.GetConnectionString("IdentityConnection");
        services.AddDbContext<AppIdentityDbContext>(options =>
        {
            options.UseSqlServer(identityConnectionString);
        });
        
        var builder = services.AddIdentityCore<AppUser>(opt =>
        {
            opt.Password.RequireNonAlphanumeric = false;
            opt.Password.RequireDigit = false;
            opt.Password.RequireUppercase = false;
            opt.Password.RequireLowercase = false;
            opt.Password.RequiredLength = 4;
            opt.Password.RequiredUniqueChars = 0;
        });
        
        builder = new IdentityBuilder(builder.UserType, builder.Services);
        builder.AddEntityFrameworkStores<AppIdentityDbContext>();
        builder.AddSignInManager<SignInManager<AppUser>>();

        // services.AddIdentity<AppUser, IdentityRole>(opt =>
        // {
        //     opt.Password.RequireNonAlphanumeric = false;
        //     opt.Password.RequireDigit = false;
        //     opt.Password.RequireUppercase = false;
        //     opt.Password.RequireLowercase = false;
        //     opt.Password.RequiredLength = 4;
        //     opt.Password.RequiredUniqueChars = 0;
        //     
        // })
        //     .AddEntityFrameworkStores<AppIdentityDbContext>()
        //     .AddDefaultTokenProviders();
        
        
            
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(opt =>
            {
                opt.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Token:Key"])),
                    ValidIssuer = config["Token:Issuer"],
                    ValidateIssuer = true,
                    ValidateAudience = false
                };
            });

        try
        {
            var context = services.BuildServiceProvider().GetRequiredService<AppIdentityDbContext>();
            await context.Database.MigrateAsync();
            
            var userManager = services.BuildServiceProvider().GetRequiredService<UserManager<AppUser>>();

            await AppIdentityDbContextSeed.SeedUserAsync(userManager);
        }
        catch (Exception e)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(e, "An error occured during migration (Identity)");
        }
        
    }

}