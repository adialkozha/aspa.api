using Microsoft.AspNetCore.Http;

namespace AspaApp.Models
{
    public class ProductViewModel
    {
        public string ProductName { get; set; }

        public int ProductCost { get; set; }
        public IFormFile ProductImage { get; set; }

        public int СategoryId { get; set; }
        public Сategory Сategory { get; set; }
    }
}
