using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
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
}