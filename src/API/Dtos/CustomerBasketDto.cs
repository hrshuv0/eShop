using System.ComponentModel.DataAnnotations;

namespace API.Dtos;

public class CustomerBasketDto
{
    [Required]
    public string Id { get; set; }
    public List<BasketItemDto> Items { get; set; } = new();
}

public class BasketItemDto
{
    public long Id { get; set; }
    public string ProductName { get; set; }

    [Required, Range(0.1, Double.MaxValue, ErrorMessage = "Price must be greater than 0")]
    public decimal Price { get; set; }
    
    [Required, Range(1, Double.MaxValue, ErrorMessage = "Quantity must be at least 1")]
    public int Quantity { get; set; }
    
    public string PictureUrl { get; set; }
    public string Brand { get; set; }
    
    [Required]
    public string Type { get; set; }
}