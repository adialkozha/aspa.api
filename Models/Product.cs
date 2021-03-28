using System.Collections.Generic;

namespace AspaApp.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public int ProductCost { get; set; }
        public byte[] ProductImage { get; set; }

        public int СategoryId { get; set; }

        public Сategory Сategory { get; set; }

        public List<Basket> Basket { get; set; } = new List<Basket>();
    }

}
