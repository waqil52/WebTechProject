using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CoreModel.Entities.Bookings;
using CoreModel.Entities.Cabins;
using CoreModel.Entities.Passengers;
using ShipManagement.DataModel;

namespace ShipManagement
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<LocationDto, Location>();
            CreateMap<CabinDto, Cabin>();
            CreateMap<PassengerDto, Passenger>();
            CreateMap<BookingDto, BookingInfo>();
            CreateMap<BookingDto, Booking>();
        }
    }
}
