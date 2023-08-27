namespace Core.Entities.OrderAggregate;

public class ProductItemOrdered
{
    public long ProductItemId { get; set; }
    public string? ProductName { get; set; }
    public string? PictureUrl { get; set; }

    public ProductItemOrdered() { }
    
    public ProductItemOrdered(long productItemId, string productName, string pictureUrl)
    {
        ProductItemId = productItemId;
        ProductName = productName;
        PictureUrl = pictureUrl;
    }
}