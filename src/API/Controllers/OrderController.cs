using API.Dtos;
using API.Errors;
using API.Extensions;
using AutoMapper;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Authorize]
public class OrderController : BaseApiController
{
    private readonly IOrderService _orderService;
    private readonly IMapper _mapper;

    public OrderController(IOrderService orderService, IMapper mapper)
    {
        _orderService = orderService;
        _mapper = mapper;
    }

    [HttpPost]
    public async Task<IActionResult> CreateOrder(OrderDto orderDto)
    {
        var email = User.RetrieveEmailFromPrincipal();
        
        var address = _mapper.Map<AddressDto, Address>(orderDto.ShipToAddress);
        
        var order = await _orderService.CreateOrderAsync(email, orderDto.DeliveryMethodId, orderDto.BasketId, address);
        if (order is null) return BadRequest(new ApiResponse(400, "Problem creating order"));
        
        return Ok(order);
    }
    
    [HttpGet]
    public async Task<IActionResult> GetOrdersForUser()
    {
        var email = User.RetrieveEmailFromPrincipal();
        
        var orders = await _orderService.GetOrdersForUserAsync(email);
        
        // var result = _mapper.Map<IReadOnlyList<Order>, IReadOnlyList<OrderToReturnDto>>(orders);
        
        return Ok(orders);
    }
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetOrderById(long id)
    {
        var email = User.RetrieveEmailFromPrincipal();
        
        var order = await _orderService.GetOrderByIdAsync(id, email);
        if (order is null) return NotFound(new ApiResponse(404));
        
        // var result = _mapper.Map<Order, OrderToReturnDto>(order);
        
        return Ok(order);
    }
    
    [HttpGet("deliveryMethods")]
    public async Task<IActionResult> GetDeliveryMethods()
    {
        var deliveryMethods = await _orderService.GetDeliveryMethodsAsync();
        
        return Ok(deliveryMethods);
    }
}