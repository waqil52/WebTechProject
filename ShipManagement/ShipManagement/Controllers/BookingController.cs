using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreModel.Entities.Bookings;
using AutoMapper;
using Service.ShipServices.Contracts;
using ShipManagement.DataModel;
using CoreModel.Entities.Passengers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShipManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private IMapper _mapper;
        private IBookingService _bookingService;
        private IPassengerService _passengerService;
        public BookingController(IBookingService bookingService,
            IPassengerService passengerService,
            IMapper mapper)
        {
            _mapper = mapper;
            _bookingService = bookingService;
            _passengerService = passengerService;
        }
        // GET: api/<BookingController>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _bookingService.GetAllBookingInfo();
            return Ok(result);
        }

        // GET api/<BookingController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<BookingController>
        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] BookingDto booking)
        {
            var bookingInfo = _mapper.Map<BookingInfo>(booking);
            var bookingCreate = _mapper.Map<Booking>(booking);
            await _bookingService.CreateAsync(bookingInfo);
            await _bookingService.CreateBookingAsync(bookingCreate);

            return Ok(bookingInfo);
        }

        [HttpPost("passenger")]
        public async Task<IActionResult> CreatePassenger([FromBody] PassengerDto passengerDto)
        {
            var passenger = _mapper.Map<Passenger>(passengerDto);
            var result = await _passengerService.CreateAsync(passenger);
            return Ok(result);
        }

        // PUT api/<BookingController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBooking(long id, [FromBody] EditBookingDto editBooking)
        {
            var booking = await _bookingService.GetASync(id);
            booking.ArrivalLocId = editBooking.ArrivalLocId;
            booking.DepartureTime = editBooking.DepartureTime;
            booking.DepLocId = editBooking.DepLocId;
            booking.DepartureTime = editBooking.DepartureTime;
            booking.Journeydate = editBooking.Journeydate;
            booking.NeedToArriveAt = editBooking.NeedToArriveAt;
            await _bookingService.UpdateAsync(booking);
            var result = await _bookingService.UpdateBooking(editBooking.PrevRoomId, editBooking.NewRoomId, editBooking.BookingId);
            return Ok(booking);
        }

        // DELETE api/<BookingController>/5
        [HttpDelete("{bookingId}/{cabinId}")]
        public async Task Delete(long bookingId, long cabinId)
        {
            await _bookingService.DeleteBooking(bookingId, cabinId);
        }
    }
}
