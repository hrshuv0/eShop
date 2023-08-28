namespace Core.Interfaces;

public interface IResponseCacheService
{
    Task CashResponseAsync(string cacheKey, object response, TimeSpan timeToLive);
    Task<string?> GetCachedResponseAsync(string cacheKey);
}