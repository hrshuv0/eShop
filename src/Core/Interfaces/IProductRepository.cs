using Core.Entities;

namespace Core.Interfaces;

public interface IProductRepository
{
    Task<Product> GetProductByIdAsync(long id);
    Task<IReadOnlyList<Product>> GetProductsAsync(); 
    Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync(); 
    Task<IReadOnlyList<ProductType>> GetProductTypesAsync(); 
}