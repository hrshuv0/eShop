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
        var result = await _context.Products!.FindAsync(id);
        
        return result!;
    }

    public async Task<IReadOnlyList<Product>> GetProductsAsync()
    {
        var result = await _context.Products!.ToListAsync();

        return result;
    }
}