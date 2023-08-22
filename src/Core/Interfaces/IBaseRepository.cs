using Core.Entities;

namespace Core.Interfaces;

public interface IBaseRepository<T> where T : BaseEntity
{
    Task<T> GetByIdAsync(long id);
    Task<IReadOnlyList<T>> LoadAsync();
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(T entity);
    
}