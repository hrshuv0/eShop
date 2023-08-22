using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Data;
using Infrastructure.Data.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
{
    private readonly StoreContext _context;

    public BaseRepository(StoreContext context)
    {
        _context = context;
    }
    
    public async Task<T> GetByIdAsync(long id)
    {
        var result = await _context.Set<T>().FindAsync(id);
        
        return result!;
    }

    public async Task<IReadOnlyList<T>> LoadAsync()
    {
        var result = await _context.Set<T>().ToListAsync();
        
        return result;
    }

    public Task<T> AddAsync(T entity)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(T entity)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAsync(T entity)
    {
        throw new NotImplementedException();
    }

    public async Task<T> GetEntityWithSpec(ISpecification<T> spec)
    {
        var result =  await ApplySpecification(spec).FirstOrDefaultAsync();
        return result!;
    }

    public async Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec)
    {
        var result = await ApplySpecification(spec).ToListAsync();
        
        return result;
    }

    public async Task<int> CountAsync(ISpecification<T> spec)
    {
        return await ApplySpecification(spec).CountAsync();
    }

    #region Private Methods
    private IQueryable<T> ApplySpecification(ISpecification<T> spec)
    {
        return SpecificationEvaluator<T>.GetQuery(_context.Set<T>().AsQueryable(), spec);
    }

    

    #endregion
}