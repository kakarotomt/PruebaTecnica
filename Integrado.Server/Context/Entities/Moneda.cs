using System.ComponentModel.DataAnnotations;

namespace Integrado.Server.Context.Entities
{
    public class Moneda
    {
        [Key]
        public int Codigo { get; set; }
        public string Descripcion { get; set; }
        public ICollection<Sucursal> Sucursales { get; set; }
    }
}
