﻿using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    private readonly StoreContext _context;

    public BuggyController(StoreContext context)
    {
        _context = context;
    }

    [HttpGet("testauth")]
    [Authorize]
    public ActionResult<string> GetSecretText()
    {
        return "secret data";
    }

    [HttpGet("notfound")]
    public ActionResult GetNotFoundRequest()
    {
        var things = _context.Products.Find(42);

        if (things is null)
            return NotFound(new ApiResponse(404));
        
        return Ok();
    }
    
    [HttpGet("servererror")]
    public ActionResult GetServerError()
    {
        var things = _context.Products.Find(42);

        var thingToReturn = things!.ToString();
        
        return Ok();
    }
    
    [HttpGet("badrequest")]
    public ActionResult GetBaRequest()
    {
        return BadRequest(new ApiResponse(400));
    }
    
    [HttpGet("badrequest/{id}")]
    public ActionResult GetNotFoundRequest(int id)
    {
        return BadRequest(new ApiResponse(400));
    }
}