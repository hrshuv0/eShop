using API.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<Product> GetProductByIdAsync(long id);
    Task<IReadOnlyList<Product>> GetProductsAsync(); 
}