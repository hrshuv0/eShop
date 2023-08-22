using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class ProductsController : BaseApiController
{
    private readonly IBaseRepository<Product> _productRepo;
    private readonly IBaseRepository<ProductType> _productTypeRepo;
    private readonly IBaseRepository<ProductBrand> _productBrandRepo;
    private readonly IMapper _mapper;

    public ProductsController(IBaseRepository<Product> productRepository, IBaseRepository<ProductType> productTypeRepo, IBaseRepository<ProductBrand> productBrandRepo, IMapper mapper)
    {
        _productRepo = productRepository;
        _productTypeRepo = productTypeRepo;
        _productBrandRepo = productBrandRepo;
        _mapper = mapper;
    }


    [HttpGet]
    public async Task<IActionResult> GetProducts()
    {
        var spec = new ProductsWithTypesAndBrandSpecification();
        var products = await _productRepo.ListAsync(spec);
        
        var productsToReturn = _mapper.Map<IReadOnlyList<Product>, IReadOnlyList<ProductToReturnDto>>(products);
        
        return Ok(productsToReturn);
    }
    
    [HttpGet("{id:long}")]
    public async Task<IActionResult> GetProduct(long id)
    {
        var spec = new ProductsWithTypesAndBrandSpecification(id);
        var product = await _productRepo.GetEntityWithSpec(spec);
        
        var productToReturn = _mapper.Map<Product, ProductToReturnDto>(product);
        
        return Ok(productToReturn);
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