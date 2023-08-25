using API.Dtos;
using API.Errors;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AccountController : BaseApiController
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;

    public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }
    
    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
    {
        var user = await _userManager.FindByEmailAsync(loginDto.Email);

        if (user == null) return Unauthorized(new ApiResponse(401));

        var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

        if (result.Succeeded)
        {
            return CreateUserDto(user);
        }

        return Unauthorized(new ApiResponse(401));
    }
    
    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
    {
        if (await CheckEmailExistsAsync(registerDto.Email))
        {
            return new BadRequestObjectResult(new ApiValidationErrorResponse{Errors = new []{"Email address is in use"}});
        }

        var user = new AppUser
        {
            DisplayName = registerDto.DisplayName,
            Email = registerDto.Email,
            UserName = registerDto.Email
        };

        var result = await _userManager.CreateAsync(user, registerDto.Password);

        if (!result.Succeeded) return BadRequest(new ApiResponse(400));

        return CreateUserDto(user);
    }
    
    
    
    

    private async Task<bool> CheckEmailExistsAsync(string registerDtoEmail)
    {
        return await _userManager.FindByEmailAsync(registerDtoEmail)
            .ContinueWith(task => task.Result != null);
    }

    private ActionResult<UserDto> CreateUserDto(AppUser user)
    {
        var userDto = new UserDto()
        {
            Email = user.Email,
            DisplayName = user.DisplayName!,
            Token = "Token will be here"
        };
        return userDto;
    }
    
    
    
}