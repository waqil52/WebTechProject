using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreModel.Entities.Passengers;
using AutoMapper;
using Service.ShipServices.Contracts;
using ShipManagement.DataModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShipManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassengerController : ControllerBase
    {
        private IPassengerService _passengerService;
        private IMapper _mapper;

        public PassengerController(IPassengerService passengerService, IMapper mapper)
        {
            _mapper = mapper;
            _passengerService = passengerService;
        }
        // GET: api/<PassengerController>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _passengerService.GetAllAsync();
            return Ok(result);
        }

        // GET api/<PassengerController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id)
        {
            var result = await _passengerService.GetASync(id);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePassenger([FromBody] PassengerDto passengerDto)
        {
            var passenger = _mapper.Map<Passenger>(passengerDto);
            var result = await _passengerService.CreateAsync(passenger);
            return Ok(result);
        }

        // PUT api/<PassengerController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, [FromBody] PassengerDto value)
        {
            var passenger = await _passengerService.GetASync(id);
            passenger.Name = value.Name;
            passenger.Gender = value.Gender;
            var result = await _passengerService.UpdateAsync(passenger);
            return Ok(result);
        }

        // DELETE api/<PassengerController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            var result = await _passengerService.DeleteAsycn(id);
            return Ok(result);

        }
    }
}
