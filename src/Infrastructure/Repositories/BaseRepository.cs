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

    public void AddAsync(T entity)
    {
        _context.Set<T>().Add(entity);
    }

    public void UpdateAsync(T entity)
    {
        _context.Set<T>().Attach(entity);
        _context.Entry(entity).State = EntityState.Modified;
    }

    public void DeleteAsync(T entity)
    {
        _context.Set<T>().Remove(entity);
    }

    public async Task<T?> GetEntityWithSpec(ISpecification<T> spec)
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