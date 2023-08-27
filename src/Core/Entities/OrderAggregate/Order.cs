namespace Core.Entities.OrderAggregate;

public class Order : BaseEntity
{
    public Order()
    {
        OrderDate = DateTimeOffset.Now;
        Status = OrderStatus.Pending;
    }
    
    public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, Address shipToAddress, DeliveryMethod deliveryMethod, decimal subtotal)
    {
        BuyerEmail = buyerEmail;
        ShipToAddress = shipToAddress;
        DeliveryMethod = deliveryMethod;
        OrderItems = orderItems;
        Subtotal = subtotal;
        
        OrderDate = DateTimeOffset.Now;
        Status = OrderStatus.Pending;
    }

    public string? BuyerEmail { get; set; }
    public DateTimeOffset OrderDate { get; set; }
    public Address ShipToAddress { get; set; }
    public DeliveryMethod DeliveryMethod { get; set; }
    public IReadOnlyList<OrderItem> OrderItems { get; set; }
    public decimal Subtotal { get; set; }
    public OrderStatus Status { get; set; }
    public string? PaymentIntentId { get; set; }
    
    public decimal GetTotal() => Subtotal + DeliveryMethod.Price;
    
    
    
}