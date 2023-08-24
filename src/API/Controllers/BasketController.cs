using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BasketController : BaseApiController
{
    private readonly IBasketRepository _basketRepository;

    public BasketController(IBasketRepository basketRepository)
    {
        _basketRepository = basketRepository;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetBasketById(string id)
    {
        var basket = await _basketRepository.GetBasketAsync(id);
        basket ??= new CustomerBasket(id);
        
        return Ok(basket);
    }
    
    [HttpPost]
    public async Task<IActionResult> UpdateBasket(CustomerBasket basket)
    {
        var updatedBasket = await _basketRepository.UpdateBasketAsync(basket);
        return Ok(updatedBasket);
    }
    
    [HttpDelete]
    public async Task DeleteBasket(string id)
    {
        await _basketRepository.DeleteBasketAsync(id);
    }
}