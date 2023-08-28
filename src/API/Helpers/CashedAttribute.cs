using System.Text;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace API.Helpers;

public class CashedAttribute : Attribute, IAsyncActionFilter
{
    private readonly int _timeToLiveSeconds;

    public CashedAttribute(int timeToLiveSeconds)
    {
        _timeToLiveSeconds = timeToLiveSeconds;
    }

    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        var cashService = context.HttpContext.RequestServices.GetRequiredService<IResponseCacheService>();
        
        var cacheKey = GenerateCacheKeyFromRequest(context.HttpContext.Request);
        var cashResponse = await cashService.GetCachedResponseAsync(cacheKey);

        if (!string.IsNullOrEmpty(cashResponse))
        {
            var contentResult = new ContentResult
            {
                Content = cashResponse,
                ContentType = "application/json",
                StatusCode = 200
            };
            
            context.Result = contentResult;
            
            return;
        }
        
        var executedContext = await next(); // move to controller
        if (executedContext.Result is OkObjectResult okObjectResult)
        {
            await cashService.CashResponseAsync(cacheKey, okObjectResult.Value!,
                TimeSpan.FromSeconds(_timeToLiveSeconds));
        }
    }

    private string GenerateCacheKeyFromRequest(HttpRequest request)
    {
        var keyBuilder = new StringBuilder();

        keyBuilder.Append($"{request.Path}");

        foreach (var (key, value) in request.Query.OrderBy(x => x.Key))
        {
            keyBuilder.Append($"|{key}-{value}");
        }

        return keyBuilder.ToString();
    }
}