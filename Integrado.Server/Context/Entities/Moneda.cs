using System.ComponentModel.DataAnnotations;

namespace Integrado.Server.Context.Entities
{
    public class Moneda
    {
        [Key]
        public int codigo { get; set; }
        public string descripcion { get; set; }
        public ICollection<Sucursal> sucursales { get; set; }
    }
}
