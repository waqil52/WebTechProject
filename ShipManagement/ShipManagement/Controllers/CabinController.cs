﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreModel.Entities.Cabins;
using AutoMapper;
using Service.ShipServices.Contracts;
using ShipManagement.DataModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShipManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CabinController : ControllerBase
    {
        private IMapper _mapper;
        private ICabinService _cabinService;
        public CabinController(ICabinService cabinService, IMapper mapper)
        {
            _cabinService = cabinService;
            _mapper = mapper;
        }
        // GET: api/<CabinController>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _cabinService.GetAllAsync();
            return Ok(result);
        }

        // GET api/<CabinController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(long id)
        {
            var cabin = await _cabinService.GetASync(id);
            return Ok(cabin);
        }

        // POST api/<CabinController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CabinDto cabinDto)
        {
            var cabin = _mapper.Map<Cabin>(cabinDto);
            var result = await _cabinService.CreateAsync(cabin);
            return Ok(result);
        }

        // PUT api/<CabinController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CabinController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
