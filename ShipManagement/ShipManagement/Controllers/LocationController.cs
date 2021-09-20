using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Service.ShipServices.Contracts;
using ShipManagement.DataModel;
using AutoMapper;
using CoreModel.Entities.Bookings;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShipManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private ILocationService _locationService;
        private IMapper _mapper;
        public LocationController(ILocationService location, IMapper mapper)
        {
            _locationService = location;
            _mapper = mapper;
        }
        // GET: api/<LocationController>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _locationService.GetAllAsync();
            return Ok(result);
        }

        // GET api/<LocationController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id)
        {
            var result = await _locationService.GetASync(id);
            return Ok(result);
        }

        // POST api/<LocationController>
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] LocationDto locationDto)
        {
            var location = _mapper.Map<Location>(locationDto);
            var result = await _locationService.CreateAsync(location);
            return Ok(result);
        }

        // PUT api/<LocationController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLocation(long id, [FromBody] LocationDto locationDto)
        {
            var location = await _locationService.GetASync(id);
            location.Name = locationDto.Name;
            await _locationService.UpdateAsync(location);
            return Ok(location); 
        }

        // DELETE api/<LocationController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> UpdateLocation(long id)
        {
            var result = await _locationService.DeleteAsycn(id);
            return Ok(result);

        }
    }
}
