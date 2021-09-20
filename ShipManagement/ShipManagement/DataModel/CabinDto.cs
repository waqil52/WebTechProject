using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShipManagement.DataModel
{
    public class CabinDto
    {
        public long Id { get; set; }
        public virtual string CabinNumber { get; set; }
        public virtual int Capacity { get; set; }
        public virtual decimal Fare { get; set; }
    }
}
