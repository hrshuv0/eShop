using API.Extensions;
using API.Helpers;
using API.Middleware;
using Core.Interfaces;
using Infrastructure.Data;
using Infrastructure.Repositories;
using Infrastructure.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo{Title = "SkiNet API", Version = "v1"});
    var securityScheme = new OpenApiSecurityScheme()
    {
        Description = "JWT Auth Bearer Scheme",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.Http,
        Scheme = "bearer",
        Reference = new OpenApiReference()
        {
            Type = ReferenceType.SecurityScheme,
            Id = "Bearer"
        }
    };
    c.AddSecurityDefinition("Bearer", securityScheme);
    var securityRequirement = new OpenApiSecurityRequirement() { { securityScheme, new[] { "Bearer" } } };
    c.AddSecurityRequirement(securityRequirement);
});

builder.Services.AddControllers();

#region Dependency Injection

builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IBasketRepository, BasketRepository>();
builder.Services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));
builder.Services.AddAutoMapper(typeof(MappingProfiles));

builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();


#endregion

#region Extensiions
await builder.Services.AddApplicationServices(builder.Configuration);
await builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddConfigureServices(builder.Configuration);

#endregion


var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseMiddleware<ExceptionMiddleware>();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    // app.UseDeveloperExceptionPage();
}

app.UseStatusCodePagesWithReExecute("/errors/{0}");

// app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
