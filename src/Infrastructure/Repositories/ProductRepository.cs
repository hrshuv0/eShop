using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly StoreContext _context;

    public ProductRepository(StoreContext context)
    {
        _context = context;
    }

    public async Task<Product> GetProductByIdAsync(long id)
    {
        var result = await _context.Products!
            .Include(p => p.ProductType)
            .Include(p => p.ProductBrand)
            .FirstOrDefaultAsync(p => p.Id == id);
        
        return result!;
    }

    public async Task<IReadOnlyList<Product>> GetProductsAsync()
    {
        var result = await _context.Products!
            .Include(p => p.ProductType)
            .Include(p => p.ProductBrand)
            .ToListAsync();

        return result;
    }

    public async Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync()
    {
        var result = await _context.ProductBrands!.ToListAsync();

        return result;
    }

    public async Task<IReadOnlyList<ProductType>> GetProductTypesAsync()
    {
        var result = await _context.ProductTypes!.ToListAsync();

        return result;
    }
}