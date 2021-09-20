using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipManagement.DataModel
{
    public class BookingDto
    {
        public DateTime Journeydate { get; set; }
        public string DepartureTime { get; set; }
        public string NeedToArriveAt { get; set; }
        public virtual long DepLocId { get; set; }
        public virtual long ArrivalLocId { get; set; }
        public virtual long BookingId { get; set; }
        public virtual long CabinId { get; set; }
        public virtual long PassengerId { get; set; }
    }
}
