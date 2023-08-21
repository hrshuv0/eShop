using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _productRepository;

    public ProductsController(IProductRepository productRepository)
    {
        _productRepository = productRepository;
    }


    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _productRepository.GetProductsAsync();
        
        return Ok(products);
    }
    
    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetProduct(long id)
    {
        var product = await _productRepository.GetProductByIdAsync(id);
        
        return Ok(product);
    }

    
} 