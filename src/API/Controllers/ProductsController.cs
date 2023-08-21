using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly StoreContext _dbContext;

    public ProductsController(StoreContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var products = await _dbContext.Products!.ToListAsync();
        
        return Ok(products);
    }
    
    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetProduct(long id)
    {
        var product = await _dbContext.Products!.FindAsync(id);
        
        return Ok(product);
    }

    
} 