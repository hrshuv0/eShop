namespace API.Dtos;

public class OrderDto
{
    public string BasketId { get; set; }
    public long DeliveryMethodId { get; set; }
    public AddressDto ShipToAddress { get; set; }
}