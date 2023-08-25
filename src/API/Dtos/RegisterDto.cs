using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class RegisterDto
{
    public string DisplayName { get; set; }
    
    [Required]
    [EmailAddress]
    public string Email { get; set; }
    
    [Required]
    [StringLength(4, ErrorMessage = "Password must be at least 4 characters")]
    public string Password { get; set; }
}