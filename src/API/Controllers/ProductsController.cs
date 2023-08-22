using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IBaseRepository<Product> _productRepo;
    private readonly IBaseRepository<ProductType> _productTypeRepo;
    private readonly IBaseRepository<ProductBrand> _productBrandRepo;

    public ProductsController(IBaseRepository<Product> productRepository, IBaseRepository<ProductType> productTypeRepo, IBaseRepository<ProductBrand> productBrandRepo)
    {
        _productRepo = productRepository;
        _productTypeRepo = productTypeRepo;
        _productBrandRepo = productBrandRepo;
    }


    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var spec = new ProductsWithTypesAndBrandSpecification();
        var products = await _productRepo.ListAsync(spec);
        
        return Ok(products);
    }
    
    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetProduct(long id)
    {
        var spec = new ProductsWithTypesAndBrandSpecification(id);
        var product = await _productRepo.GetEntityWithSpec(spec);
        
        return Ok(product);
    }
    
    [HttpGet("brands")]
    public async Task<IActionResult> GetProductBrands()
    {
        var products = await _productBrandRepo.LoadAsync();
        
        return Ok(products);
    }
    
    [HttpGet("types")]
    public async Task<IActionResult> GetProductTypes()
    {
        var products = await _productTypeRepo.LoadAsync();
        
        return Ok(products);
    }

    
} 