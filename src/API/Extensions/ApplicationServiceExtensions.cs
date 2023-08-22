using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static void AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        var loggerFactory = services.BuildServiceProvider().GetRequiredService<ILoggerFactory>();
        services.AddDbContext<StoreContext>(options =>
        {
            options.UseSqlServer(config.GetConnectionString("DefaultConnection"))
                .LogTo(Console.WriteLine, LogLevel.Information)
                .EnableSensitiveDataLogging()
                .UseLoggerFactory(loggerFactory);
        });


        try
        {
            var context = services.BuildServiceProvider().GetRequiredService<StoreContext>();
            context.Database.Migrate();
        }
        catch (Exception e)
        {
            var logger = loggerFactory.CreateLogger<Program>();
            logger.LogError(e, "An error occured during migration");
        }
        
    }

}