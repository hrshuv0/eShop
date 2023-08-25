using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BasketController : BaseApiController
{
    private readonly IBasketRepository _basketRepository;
    private IMapper _mapper;

    public BasketController(IBasketRepository basketRepository, IMapper mapper)
    {
        _basketRepository = basketRepository;
        _mapper = mapper;
    }
    
    [HttpGet]
    public async Task<IActionResult> GetBasketById(string id)
    {
        var basket = await _basketRepository.GetBasketAsync(id);
        basket ??= new CustomerBasket(id);
        
        return Ok(basket);
    }
    
    [HttpPost]
    public async Task<IActionResult> UpdateBasket(CustomerBasketDto basket)
    {
        var customerBasket = _mapper.Map<CustomerBasketDto, CustomerBasket>(basket);
        
        var updatedBasket = await _basketRepository.UpdateBasketAsync(customerBasket);
        
        
        return Ok(updatedBasket);
    }
    
    [HttpDelete]
    public async Task DeleteBasket(string id)
    {
        await _basketRepository.DeleteBasketAsync(id);
    }
}