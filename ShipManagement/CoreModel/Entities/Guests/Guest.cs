using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CoreModel.Entities.Guests
{
    public class Guest : BaseEntity
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public string ContactNumber { get; set; }
    }
}
