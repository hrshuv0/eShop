﻿namespace Core.Specifications;

public class ProductSpecParams
{
    public const int MaxPageSize = 50;
    public int PageIndex { get; set; } = 1;
    
    private int _pageSize = 6;
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = value > MaxPageSize ? MaxPageSize : value;
    }
    
    public long? BrandId { get; set; }
    public long? TypeId { get; set; }
    public string? Sort { get; set; }
}