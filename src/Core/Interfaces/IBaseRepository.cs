using Core.Entities;
using Core.Specifications;

namespace Core.Interfaces;

public interface IBaseRepository<T> where T : BaseEntity
{
    Task<T> GetByIdAsync(long id);
    Task<IReadOnlyList<T>> LoadAsync();
    void AddAsync(T entity);
    void UpdateAsync(T entity);
    void DeleteAsync(T entity);
    
    Task<T?> GetEntityWithSpec(ISpecification<T> spec);
    Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
    
    Task<int> CountAsync(ISpecification<T> spec);
    
}